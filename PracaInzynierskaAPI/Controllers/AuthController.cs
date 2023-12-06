using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IMapper _mapper;

        public AuthController(IAuthService authService, IMapper mapper)
        {
            _authService = authService;
            _mapper = mapper;
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login(LoginDto loginDto)
        {
            var user = await _authService.AuthenticateUser(loginDto);
            if (user == null) return Unauthorized("Wrong login or password!");
            var jwtToken = _authService.GenerateJtwToken(user);
            var currentlyLoggedUser = _mapper.Map<WorkerDto>(user);

            return Ok(new { token = jwtToken, user = currentlyLoggedUser });
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            await _authService.RegisterUser(registerDto);
            return Ok(new { message = "User registered" });
        }

        [Authorize]
        [HttpGet("GetCurrentlyLoggedUser")]
        public async Task<ActionResult> GetCurrentlyLoggedUser()
        {
            var currentlyLoggedUser = await _authService.GetCurrentlyLoggedWorker();
            return Ok(currentlyLoggedUser);
        }

        [Authorize]
        [HttpPost("UpdateUser")]
        public async Task<IActionResult> UpdateUser(UpdateUserDto updateUserDto)
        {
            await _authService.UpdateUser(updateUserDto);
            return Ok();
        }

        [Authorize]
        [HttpPost("UpdateUserProfilePicture")]
        public async Task<IActionResult> UpdateUserProfilePicture()
        {
            await _authService.UpdateUserProfilePicture(Request.Form.Files[0]);
            return Ok();
        }

        [Authorize]
        [HttpGet("GetUserPicture")]
        public async Task<IActionResult> GetUserPicture()
        {
            var currentlyLoggedUser = await _authService.GetCurrentlyLoggedWorker();
            return Ok(new { file = currentlyLoggedUser.ProfilePicture });
        }

        [Authorize]
        [HttpGet("UpdateUserRole/{newRole}/{userId}")]
        public async Task<IActionResult> UpdateUserRole([FromRoute] string newRole, [FromRoute]Guid userId)
        {
            await _authService.UpdateUserRole(newRole, userId);
            return Ok();
        }
    }
}
