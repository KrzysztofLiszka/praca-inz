using AutoMapper;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Services
{
    public class VisualizationService : IBaseItemService<Visualization>, IVisualizationService
    {
        private readonly ISqlRepository<Visualization> _visualizationRepository;
        private readonly ISqlRepository<Image> _imageRepository;
        private readonly IMapper _mapper;

        public VisualizationService(ISqlRepository<Visualization> visualizationRepository, ISqlRepository<Image> imageRepository, IMapper mapper)
        {
            _visualizationRepository = visualizationRepository;
            _imageRepository = imageRepository;
            _mapper = mapper;
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
            await _imageRepository.DeleteAsync(imageId);
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

        public async Task<List<ImageDto>> GetImages(Guid visualizationId)
        {
            var allImages = await _imageRepository.GetAllAsync();
            var imagesFromVisualization = allImages.Where(x => x.VisualizationId == visualizationId).ToList();
            var imagesDtoList = _mapper.Map<List<ImageDto>>(imagesFromVisualization);

            return imagesDtoList;
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
