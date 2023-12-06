using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Constants;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = $"{Roles.SystemAdmin}, {Roles.Worker}, {Roles.WorkspaceOwner}")]

    public class ScheduleController : BaseUserItemController<Schedule>
    {
        private readonly IBaseItemService<Schedule> _baseItemService;
        private readonly ICurrentUserService _currentUserService;
        private readonly IAuthService _authService;

        public ScheduleController(IBaseItemService<Schedule> baseItemService, ICurrentUserService currentUserService, IAuthService authService) : base(baseItemService, currentUserService, authService)
        {
            _baseItemService = baseItemService;
            _currentUserService = currentUserService;
            _authService = authService;
        }

        [HttpGet("GetUserItemsWithFilters")]
        public async Task<ActionResult<List<Schedule>>> GetUserItemsWithFilters([FromQuery] DateTime? from, [FromQuery] DateTime? to)
        {
            var items = await _baseItemService.GetAllItemsAsync();
            var user = await _authService.GetCurrentlyLoggedWorker();
            items = items.Where(x => x.WorkplaceId == user.WorkplaceId).OrderBy(x => x.Date).ToList();
            var userId = _currentUserService.GetCurrentUserId();
            var filteredItems = items.Where(x => x.UserId == userId && x.Date >= from && x.Date <= to).ToList();
            if (!filteredItems.Any() && from != null && to != null)
            {
                return NotFound("No schedules found in the given timeline.");
            }

            if(from == null || to == null)
            {
                return Ok(items);
            }

            return Ok(filteredItems);
        }

    }
}
