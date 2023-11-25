using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Services
{
    public class VisualizationService : IBaseItemService<Visualization>, IVisualizationService
    {
        private readonly ISqlRepository<Visualization> _visualizationRepository;
        private readonly ISqlRepository<Image> _imageRepository;

        public VisualizationService(ISqlRepository<Visualization> visualizationRepository, ISqlRepository<Image> imageRepository)
        {
            _visualizationRepository = visualizationRepository;
            _imageRepository = imageRepository;
        }

        public async Task AddImage(Guid visualizationId, IFormFile file)
        {
            var image = new Image
            {
                VisualizationId = visualizationId,
                Data = ConvertFileToByte(file)
            };
            await _imageRepository.AddAsync(image);
        }

        public async Task AddItemAsync(Visualization item)
        {
            await _visualizationRepository.AddAsync(item);
        }

        public async Task DeleteImage(Guid imageId)
        {
            await _visualizationRepository.DeleteAsync(imageId);
        }

        public async Task DeleteItemAsync(Guid id)
        {
            await _visualizationRepository.DeleteAsync(id);
        }

        public async Task<List<Visualization>> GetAllItemsAsync()
        {
            var items = await _visualizationRepository.GetAllAsync();
            return items;
        }

        public async Task<Visualization> GetItemByIdAsync(Guid id)
        {
            var item = await _visualizationRepository.GetByIdAsync(id);
            return item;
        }

        public async Task UpdateItemAsync(Visualization item)
        {
            await _visualizationRepository.UpdateAsync(item);
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
