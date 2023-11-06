using AutoMapper;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Services
{
    public class WorkplaceService : IBaseItemService<Workplace>, IWorkplaceService
    {
        private readonly ISqlRepository<Workplace> _workplaceRepository;
        private readonly ICurrentUserService _currentUserService;
        private readonly ISqlRepository<User> _userRepository;
        private readonly IMapper _mapper;

        public WorkplaceService(ISqlRepository<Workplace> workplaceRepository, ICurrentUserService currentUserService, 
            ISqlRepository<User> userRepository, IMapper mapper)
        {
            _workplaceRepository = workplaceRepository;
            _currentUserService = currentUserService;
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task AddItemAsync(Workplace item)
        {
            await _workplaceRepository.AddAsync(item);
        }

        public async Task DeleteItemAsync(Guid id)
        {
            await _workplaceRepository.DeleteAsync(id);
        }

        public async Task<List<Workplace>> GetAllItemsAsync()
        {
            return await _workplaceRepository.GetAllAsync();
        }

        public async Task<Workplace> GetItemByIdAsync(Guid id)
        {
            return await _workplaceRepository.GetByIdAsync(id);
        }

        public async Task<List<WorkerDto>> GetWorkersFromWorkplace()
        {
            var userId = _currentUserService.GetCurrentUserId();
            var user = await _userRepository.GetByIdAsync(userId);
            var allUsers = await _userRepository.GetAllAsync();
            var usersFromWorkplace = allUsers.Where(u => u.WorkplaceId == user.WorkplaceId);
            var workersFromWorkplace = _mapper.Map<List<WorkerDto>>(usersFromWorkplace);

            return workersFromWorkplace;
        }

        public async Task AssignUserToWorkplace(Workplace workplace)
        {
            var userId = _currentUserService.GetCurrentUserId();
            var user = await _userRepository.GetByIdAsync(userId);
            user.WorkplaceId = workplace.Id;
            await _userRepository.UpdateAsync(user);
        }

        public async Task UpdateItemAsync(Workplace item)
        {
            await _workplaceRepository.UpdateAsync(item);
        }
    }
}
