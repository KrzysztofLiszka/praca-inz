using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Services
{
    public class AssignmentService : IBaseItemService<Assignment>
    {
        private readonly ISqlRepository<Assignment> _assignmentRepository;
        private readonly ISqlRepository<User> _userRepository;

        public AssignmentService(ISqlRepository<Assignment> assignmentRepository, ISqlRepository<User> userRepository)
        {
            _assignmentRepository = assignmentRepository;
            _userRepository = userRepository;
        }

        public async Task AddItemAsync(Assignment item)
        {
            await _assignmentRepository.AddAsync(item);
        }

        public async Task DeleteItemAsync(Guid id)
        {
            await _assignmentRepository.DeleteAsync(id);
        }

        public async Task<List<Assignment>> GetAllItemsAsync()
        {
            var users = await _userRepository.GetAllAsync();
            var items = await _assignmentRepository.GetAllAsync();

            foreach (var item in items) 
            {
                item.ProfilePicture = users.Find(x => x.Id == item.UserId)?.ProfilePicture;
            }
            return items;
        }

        public async Task<Assignment> GetItemByIdAsync(Guid id)
        {
            var item = await _assignmentRepository.GetByIdAsync(id);
            return item;
        }

        public async Task UpdateItemAsync(Assignment item)
        {
            await _assignmentRepository.UpdateAsync(item);
        }
    }
}
