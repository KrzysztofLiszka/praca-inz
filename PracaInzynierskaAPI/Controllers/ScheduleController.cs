using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ScheduleController : BaseUserItemController<Schedule>
    {
        public ScheduleController(IBaseItemService<Schedule> baseItemService, ICurrentUserService currentUserService, IAuthService authService) : base(baseItemService, currentUserService, authService)
        {
        }
    }
}
