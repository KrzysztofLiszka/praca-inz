using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;

namespace PracaInzynierskaAPI.Services.Interfaces
{
    public interface IAuthService
    {
        Task<User?> AuthenticateUser(LoginDto loginDto);
        Task<User?> RegisterUser(RegisterDto registerDto);
        Task<List<WorkerDto>> GetWorkersFromWorkplace(Guid workplaceId);
        string GenerateJtwToken(User user);
        Task AssignUserToWorkplace(Workplace workplace);
        Task<WorkerDto> GetCurrentlyLoggedWorker();
    }
}
