using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Services
{
    public class DocumentationService : IBaseItemService<Documentation>
    {
        private readonly ISqlRepository<Documentation> _documentationRepository;

        public DocumentationService(ISqlRepository<Documentation> documentationRepository)
        {
            _documentationRepository = documentationRepository;
        }

        public async Task AddItemAsync(Documentation item)
        {
            await _documentationRepository.AddAsync(item);
        }

        public async Task DeleteItemAsync(Guid id)
        {
            await _documentationRepository.DeleteAsync(id);
        }

        public async Task<List<Documentation>> GetAllItemsAsync()
        {
            var items = await _documentationRepository.GetAllAsync();
            return items;
        }

        public async Task<Documentation> GetItemByIdAsync(Guid id)
        {
            var item = await _documentationRepository.GetByIdAsync(id);
            return item;
        }

        public async Task UpdateItemAsync(Documentation item)
        {
            await _documentationRepository.UpdateAsync(item);
        }
    }
}
