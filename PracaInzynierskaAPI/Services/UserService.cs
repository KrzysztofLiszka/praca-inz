using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Services
{
    public class UserService : IBaseItemService<User>
    {
        private readonly ISqlRepository<User> _userRepository;

        public UserService(ISqlRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task AddItemAsync(User item)
        {
            await _userRepository.AddAsync(item);
        }

        public async Task DeleteItemAsync(Guid id)
        {
            await _userRepository.DeleteAsync(id);
        }

        public async Task<List<User>> GetAllItemsAsync()
        {
            var items = await _userRepository.GetAllAsync();
            return items;
        }

        public async Task<User> GetItemByIdAsync(Guid id)
        {
            var item = await _userRepository.GetByIdAsync(id);
            return item;
        }

        public async Task UpdateItemAsync(User item)
        {
            await _userRepository.UpdateAsync(item);
        }
    }
}
