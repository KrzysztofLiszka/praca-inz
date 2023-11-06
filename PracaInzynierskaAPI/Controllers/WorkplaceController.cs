using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class WorkplaceController : BaseItemController<Workplace>
    {
        private readonly IWorkplaceService _workplaceService;

        public WorkplaceController(IBaseItemService<Workplace> baseItemService, IWorkplaceService workplaceService) : base(baseItemService)
        {
            _workplaceService = workplaceService;
        }

        [Authorize]
        [HttpPost("AssignUserToWorkplace")]
        public async Task<ActionResult> AssignUserToWorkplace(Workplace workplace)
        {
            await _workplaceService.AssignUserToWorkplace(workplace);
            return Ok(new { message = "User assigned" });
        }

        [Authorize]
        [HttpGet("GetWorkersFromWorkplace")]
        public async Task<ActionResult> GetWorkersFromWorkplace()
        {
            var workersFromWorkplace = await _workplaceService.GetWorkersFromWorkplace();
            return Ok(workersFromWorkplace);
        }
    }
}
