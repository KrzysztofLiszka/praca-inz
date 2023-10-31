using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class WorkplaceController : BaseItemController<Workplace>
    {
        public WorkplaceController(IBaseItemService<Workplace> baseItemService) : base(baseItemService)
        {
        }
    }
}
