using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Constants;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = $"{Roles.SystemAdmin}, {Roles.Worker}, {Roles.WorkspaceOwner}, {Roles.Accountant}")]

    public class TimeSpentController : BaseUserItemController<TimeSpent>
    {
        public TimeSpentController(IBaseItemService<TimeSpent> baseItemService, ICurrentUserService currentUserService, IAuthService authService) : base(baseItemService, currentUserService, authService)
        {
        }
    }
}
