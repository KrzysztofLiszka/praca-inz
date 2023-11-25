using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class VisualizationController : BaseUserItemController<Visualization>
    {
        private readonly IBaseItemService<Visualization> _baseItemService;
        private readonly IVisualizationService _visualizationService;

        public VisualizationController(IBaseItemService<Visualization> baseItemService, ICurrentUserService currentUserService, IAuthService authService, IVisualizationService visualizationService) : base(baseItemService, currentUserService, authService)
        {
            _baseItemService = baseItemService;
            _visualizationService = visualizationService;
        }

        [HttpPost("AddImage/{visualizationId}")]
        public async Task<IActionResult> AddImage(Guid visualizationId)
        {
            await _visualizationService.AddImage(visualizationId, Request.Form.Files[0]);
            return Ok();
        }

        [HttpPost("DeleteImage")]
        public async Task<IActionResult> DeleteImage(Guid imageId)
        {
            await _visualizationService.DeleteImage(imageId);
            return Ok();
        }
    }
}
