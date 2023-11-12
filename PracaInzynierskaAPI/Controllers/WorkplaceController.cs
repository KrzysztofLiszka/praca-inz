using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class WorkplaceController : BaseItemController<Workplace>
    {
        private readonly IBaseItemService<Workplace> _baseItemService;
        private readonly IWorkplaceService _workplaceService;

        public WorkplaceController(IBaseItemService<Workplace> baseItemService, IWorkplaceService workplaceService) : base(baseItemService)
        {
            _baseItemService = baseItemService;
            _workplaceService = workplaceService;
        }

        [HttpPost("AssignUserToWorkplace")]
        public async Task<ActionResult> AssignUserToWorkplace(Workplace workplace)
        {
            await _workplaceService.AssignUserToWorkplace(workplace);
            return Ok(new { message = "User assigned" });
        }

        [HttpGet("GetWorkersFromWorkplace")]
        public async Task<ActionResult> GetWorkersFromWorkplace()
        {
            var workersFromWorkplace = await _workplaceService.GetWorkersFromWorkplace();
            return Ok(workersFromWorkplace);
        }

        [HttpPost("AddWorkplace")]
        public async Task<IActionResult> AddItem(Workplace item)
        {
            await _baseItemService.AddItemAsync(item);
            var workplaces = await _baseItemService.GetAllItemsAsync();
            var workplace = workplaces.Find(x => x.Name == item.Name && x.Code == item.Code);
            return Ok(workplace);
        }
    }
}
