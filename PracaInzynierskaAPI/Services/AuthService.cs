using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace PracaInzynierskaAPI.Services
{
    public class AuthService : IAuthService
    {
        private readonly ISqlRepository<User> _userRepository;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        private readonly ICurrentUserService _currentUserService;

        public AuthService(ISqlRepository<User> userRepository, IConfiguration configuration, IMapper mapper, 
            ICurrentUserService currentUserService)
        {
            _userRepository = userRepository;
            _configuration = configuration;
            _mapper = mapper;
            _currentUserService = currentUserService;
        }

        public async Task<User?> AuthenticateUser(LoginDto loginDto)
        {
            var allUsers = await _userRepository.GetAllAsync();
            var authorizedUser = allUsers.FirstOrDefault
                (x => x.Email == loginDto.Email && x.PasswordHash == HashPassword(loginDto.Password));

            return authorizedUser;
        }

        public async Task<User?> RegisterUser(RegisterDto registerDto)
        {
            var allUsers = await _userRepository.GetAllAsync();
            var foundUser = allUsers.FirstOrDefault(x => x.Email == registerDto.Email);
            if (foundUser != null) return null;
            var user = new User
            {
                Email = registerDto.Email,
                PasswordHash = HashPassword(registerDto.Password),
                Name = registerDto.Name,
                Surname = registerDto.Surname,
            };
            await _userRepository.AddAsync(user);

            return user;
        }

        public string GenerateJtwToken(User user)
        {
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);

            var claims = new List<Claim>
            {
                new Claim("userId", user.Id.ToString())
            };
            if (user.RoleName != null) claims.Add(new Claim(ClaimTypes.Role, user.RoleName));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"],
                Expires = DateTime.UtcNow.AddMinutes(Convert.ToInt32(_configuration["Jwt:TokenExpirationMins"])),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Subject = new ClaimsIdentity(claims)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public async Task<WorkerDto> GetCurrentlyLoggedWorker()
        {
            var userId = _currentUserService.GetCurrentUserId();
            var user = await _userRepository.GetByIdAsync(userId);
            var currentlyLoggedWorker = _mapper.Map<WorkerDto>(user);
            return currentlyLoggedWorker;
        }

        private static string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

            return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
        }

        public async Task UpdateUser(UpdateUserDto updateUserDto)
        {
            var userId = _currentUserService.GetCurrentUserId();
            var user = await _userRepository.GetByIdAsync(userId);
            if (user == null) 
            { 
                return;
            }
            user.Email = updateUserDto.Email;
            user.Name = updateUserDto.Name;
            user.Surname = updateUserDto.Surname;

            await _userRepository.UpdateAsync(user);
        }

        public async Task UpdateUserProfilePicture(IFormFile file)
        {
            var userId = _currentUserService.GetCurrentUserId();
            var user = await _userRepository.GetByIdAsync(userId);
            if (user == null) 
            { 
                return;
            }
            user.ProfilePicture = ConvertFileToByte(file);

            await _userRepository.UpdateAsync(user);
        }

        public async Task UpdateUserRole(string newRole, Guid userId)
        {
            var user = await _userRepository.GetByIdAsync(userId);
            user.RoleName = newRole;
            await _userRepository.UpdateAsync(user);
        }

        private static byte[] ConvertFileToByte(IFormFile file)
        {
            using var ms = new MemoryStream();
            file.CopyTo(ms);
            var fileBytes = ms.ToArray();

            return fileBytes;
        }
    }
}
