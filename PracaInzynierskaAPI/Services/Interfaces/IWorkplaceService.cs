using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;

namespace PracaInzynierskaAPI.Services.Interfaces
{
    public interface IWorkplaceService
    {
        Task<List<WorkerDto>> GetWorkersFromWorkplace();
        Task AssignUserToWorkplace(Workplace workplace);
    }
}
