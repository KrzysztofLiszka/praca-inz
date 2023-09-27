using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Services
{
    public class WorkplaceService : IBaseItemService<Workplace>
    {
        private readonly ISqlRepository<Workplace> _workplaceRepository;

        public WorkplaceService(ISqlRepository<Workplace> workplaceRepository)
        {
            _workplaceRepository = workplaceRepository;
        }

        public async Task AddItemAsync(Workplace item)
        {
            await _workplaceRepository.AddAsync(item);
        }

        public async Task DeleteItemAsync(Guid id)
        {
            await _workplaceRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<Workplace>> GetAllItemsAsync()
        {
            return await _workplaceRepository.GetAllAsync();
        }

        public async Task<Workplace> GetItemByIdAsync(Guid id)
        {
            return await _workplaceRepository.GetByIdAsync(id);
        }

        public async Task UpdateItemAsync(Workplace item)
        {
            await _workplaceRepository.UpdateAsync(item);
        }
    }
}
