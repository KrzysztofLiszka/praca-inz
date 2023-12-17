using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Services
{
    public class TimeSpentService : IBaseItemService<TimeSpent>
    {
        private readonly ISqlRepository<TimeSpent> _timeSpentRepository;

        public TimeSpentService(ISqlRepository<TimeSpent> timeSpentRepository)
        {
            _timeSpentRepository = timeSpentRepository;
        }

        public async Task AddItemAsync(TimeSpent item)
        {
            await _timeSpentRepository.AddAsync(item);
        }

        public async Task DeleteItemAsync(Guid id)
        {
            await _timeSpentRepository.DeleteAsync(id);
        }

        public async Task<List<TimeSpent>> GetAllItemsAsync()
        {
            var items = await _timeSpentRepository.GetAllAsync();
            return items.OrderByDescending(x => x.Date).ToList();
        }

        public async Task<TimeSpent> GetItemByIdAsync(Guid id)
        {
            var item = await _timeSpentRepository.GetByIdAsync(id);
            return item;
        }

        public async Task UpdateItemAsync(TimeSpent item)
        {
            await _timeSpentRepository.UpdateAsync(item);
        }
    }
}
