using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Services
{
    public class ScheduleService : IBaseItemService<Schedule>
    {
        private readonly ISqlRepository<Schedule> _scheduleRepository;

        public ScheduleService(ISqlRepository<Schedule> scheduleRepository)
        {
            _scheduleRepository = scheduleRepository;
        }

        public async Task AddItemAsync(Schedule item)
        {
            await _scheduleRepository.AddAsync(item);
        }

        public async Task DeleteItemAsync(Guid id)
        {
            await _scheduleRepository.DeleteAsync(id);
        }

        public async Task<List<Schedule>> GetAllItemsAsync()
        {
            var items = await _scheduleRepository.GetAllAsync();
            return items;
        }

        public async Task<Schedule> GetItemByIdAsync(Guid id)
        {
            var item = await _scheduleRepository.GetByIdAsync(id);
            return item;
        }

        public async Task UpdateItemAsync(Schedule item)
        {
            await _scheduleRepository.UpdateAsync(item);
        }
    }
}
