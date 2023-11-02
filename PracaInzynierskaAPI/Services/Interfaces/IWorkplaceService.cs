using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;

namespace PracaInzynierskaAPI.Services.Interfaces
{
    public interface IWorkplaceService
    {
        Task<List<WorkerDto>> GetWorkersFromWorkplace(Guid workplaceId);
        Task AssignUserToWorkplace(Workplace workplace);
    }
}
