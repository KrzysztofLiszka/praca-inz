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
    public class BaseUserItemController<T> : ControllerBase where T : BaseEntity
    {
        private readonly IBaseItemService<T> _baseItemService;
        private readonly ICurrentUserService _currentUserService;
        private readonly IAuthService _authService;

        protected BaseUserItemController(IBaseItemService<T> baseItemService, ICurrentUserService currentUserService, IAuthService authService)
        {
            _baseItemService = baseItemService;
            _currentUserService = currentUserService;
            _authService = authService;
        }

        [HttpGet("GetAllUserItems")]
        public async Task<List<T>> GetAllUserItems()
        {
            var items = await _baseItemService.GetAllItemsAsync();
            var userId = _currentUserService.GetCurrentUserId();
            var userItems = items.Where(x => x.UserId == userId).ToList();

            return userItems;
        }

        [HttpGet("GetAllItemsFromWorkplace")]
        public async Task<List<T>> GetAllItemsFromWorkplace()
        {
            var items = await _baseItemService.GetAllItemsAsync();
            var user = await _authService.GetCurrentlyLoggedWorker();
            var userItems = items.Where(x => x.WorkplaceId == user.WorkplaceId).ToList();

            return userItems;
        }

        [HttpGet("Get/{id}")]
        public async Task<ActionResult<T>> GetItem(Guid id)
        {
            var item = await _baseItemService.GetItemByIdAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        [HttpPost("AddUserItem")]
        public async Task<IActionResult> AddUserItem(T item)
        {
            var user = await _authService.GetCurrentlyLoggedWorker();
            item.WorkplaceId = user.WorkplaceId;
            item.UserId = user.Id;
            await _baseItemService.AddItemAsync(item);

            return Ok();
        }

        [HttpPut("EditUserItem")]
        public async Task<IActionResult> EditItem(T item)
        {
            var user = await _authService.GetCurrentlyLoggedWorker();
            item.WorkplaceId = user.WorkplaceId;
            item.UserId = user.Id;
            await _baseItemService.UpdateItemAsync(item);

            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteItem(Guid id)
        {
            await _baseItemService.DeleteItemAsync(id);

            return Ok();
        }
    }
}
