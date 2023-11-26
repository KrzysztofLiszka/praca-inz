using PracaInzynierskaAPI.DTOs;

namespace PracaInzynierskaAPI.Services.Interfaces
{
    public interface IVisualizationService
    {
        Task AddImage(Guid visualizationId, IFormFile file);
        Task DeleteImage(Guid imageId);
        Task<List<ImageDto>> GetImages(Guid visualizationId);
    }
}
