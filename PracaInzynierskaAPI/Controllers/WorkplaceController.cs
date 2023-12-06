using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Constants;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services;
using PracaInzynierskaAPI.Services.Interfaces;
using PracaInzynierskaAPI.SqlRepository;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = $"{Roles.SystemAdmin}, {Roles.Worker}, {Roles.WorkspaceOwner}, {Roles.Accountant}")]

    public class WorkplaceController : BaseItemController<Workplace>
    {
        private readonly IBaseItemService<Workplace> _baseItemService;
        private readonly IWorkplaceService _workplaceService;
        private readonly ICurrentUserService _currentUserService;
        private readonly ISqlRepository<User> _userRepository;

        public WorkplaceController(IBaseItemService<Workplace> baseItemService, IWorkplaceService workplaceService, 
            ICurrentUserService currentUserService, ISqlRepository<User> userRepository) : base(baseItemService)
        {
            _baseItemService = baseItemService;
            _workplaceService = workplaceService;
            _currentUserService = currentUserService;
            _userRepository = userRepository;
        }

        [AllowAnonymous]
        [HttpPost("AssignUserToWorkplace")]
        public async Task<ActionResult> AssignUserToWorkplace(Workplace workplace)
        {
            await _workplaceService.AssignUserToWorkplace(workplace);
            var userId = _currentUserService.GetCurrentUserId();
            var user = await _userRepository.GetByIdAsync(userId);
            user.RoleName = Roles.Worker;
            user.WorkplaceId = workplace.Id;
            await _userRepository.UpdateAsync(user);
            return Ok(new { message = "User assigned" });
        }

        [HttpGet("GetWorkersFromWorkplace")]
        public async Task<ActionResult> GetWorkersFromWorkplace()
        {
            var workersFromWorkplace = await _workplaceService.GetWorkersFromWorkplace();
            var filteredItems = workersFromWorkplace.Where(item => item.Id != _currentUserService.GetCurrentUserId()).ToList();
            return Ok(filteredItems);
        }

        [AllowAnonymous]
        [HttpPost("AddWorkplace")]
        public async Task<IActionResult> AddWorkplace(Workplace item)
        {
            await _baseItemService.AddItemAsync(item);
            var workplaces = await _baseItemService.GetAllItemsAsync();
            var workplace = workplaces.Find(x => x.Name == item.Name && x.Code == item.Code);
            var userId = _currentUserService.GetCurrentUserId();
            var user = await _userRepository.GetByIdAsync(userId);
            user.RoleName = Roles.WorkspaceOwner;
            user.WorkplaceId = workplace.Id;
            await _userRepository.UpdateAsync(user);
            return Ok(workplace);
        }

        [AllowAnonymous]
        [HttpGet("GetAllWorkplaces")]
        public new async Task<List<Workplace>> GetAllItems()
        {
            var items = await _baseItemService.GetAllItemsAsync();

            return items;
        }

        [Authorize(Roles = $"{Roles.SystemAdmin}, {Roles.WorkspaceOwner}")]
        [HttpPost("DeleteWorkerFromWorkplace")]
        public async Task<IActionResult> DeleteWorkerFromWorkplace(Guid workerId)
        {
            var user = await _userRepository.GetByIdAsync(workerId);
            user.WorkplaceId = null;
            await _userRepository.UpdateAsync(user);
            return Ok();
        }
    }
}
