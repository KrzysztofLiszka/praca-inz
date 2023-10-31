using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
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

        [HttpPost("AssignUserToWorkplace")]
        public async Task<ActionResult> AssignUserToWorkplace(Guid workplaceId)
        {
            await _authService.AssignUserToWorkplace(workplaceId);
            return Ok("User assigned");
        }

        [HttpGet("GetWorkersFromWorkplace")]
        public async Task<ActionResult> GetWorkersFromWorkplace(Guid workplaceId)
        {
            var workersFromWorkplace = await _authService.GetWorkersFromWorkplace(workplaceId);
            return Ok(workersFromWorkplace);
        }

        [Authorize]
        [HttpGet("GetCurrentlyLoggedUser")]
        public async Task<ActionResult> GetCurrentlyLoggedUser()
        {
            var currentlyLoggedUser = await _authService.GetCurrentlyLoggedWorker();
            return Ok(currentlyLoggedUser);
        }
    }
}
