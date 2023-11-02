using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;

namespace PracaInzynierskaAPI.Services.Interfaces
{
    public interface IAuthService
    {
        Task<User?> AuthenticateUser(LoginDto loginDto);
        Task<User?> RegisterUser(RegisterDto registerDto);
        string GenerateJtwToken(User user);
        Task<WorkerDto> GetCurrentlyLoggedWorker();
    }
}
