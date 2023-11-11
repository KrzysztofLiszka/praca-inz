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
    public class AssignmentController : BaseUserItemController<Assignment>
    {
        public AssignmentController(IBaseItemService<Assignment> baseItemService, ICurrentUserService currentUserService) : base(baseItemService, currentUserService)
        {
        }
    }
}
