using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Constants;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = $"{Roles.SystemAdmin}, {Roles.Worker}, {Roles.WorkspaceOwner}")]
    public class VisualizationController : BaseUserItemController<Visualization>
    {
        private readonly IVisualizationService _visualizationService;

        public VisualizationController(IBaseItemService<Visualization> baseItemService, ICurrentUserService currentUserService, IAuthService authService, IVisualizationService visualizationService) : base(baseItemService, currentUserService, authService)
        {
            _visualizationService = visualizationService;
        }

        [HttpPost("AddImage/{visualizationId}")]
        public async Task<IActionResult> AddImage([FromRoute]Guid visualizationId)
        {
            await _visualizationService.AddImage(visualizationId, Request.Form.Files[0]);
            return Ok();
        }

        [HttpDelete("DeleteImage/{id}")]
        public async Task<IActionResult> DeleteImage(Guid id)
        {
            await _visualizationService.DeleteImage(id);
            return Ok();
        }

        [HttpGet("GetImages/{visualizationId}")]
        public async Task<IActionResult> GetImages(Guid visualizationId)
        {
            var result = await _visualizationService.GetImages(visualizationId);
            return Ok(result);
        }
    }
}
