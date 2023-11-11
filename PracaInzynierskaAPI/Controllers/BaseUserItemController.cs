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

        protected BaseUserItemController(IBaseItemService<T> baseItemService, ICurrentUserService currentUserService)
        {
            _baseItemService = baseItemService;
            _currentUserService = currentUserService;
        }

        [HttpGet("GetAllUserItems")]
        public async Task<List<T>> GetAllUserItems()
        {
            var items = await _baseItemService.GetAllItemsAsync();
            var userId = _currentUserService.GetCurrentUserId();
            var userItems = items.Where(x => x.UserId == userId).ToList();  

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
            item.UserId = _currentUserService.GetCurrentUserId();
            await _baseItemService.AddItemAsync(item);

            return Ok();
        }

        [HttpPut("EditUserItem")]
        public async Task<IActionResult> EditItem(T item)
        {
            item.UserId = _currentUserService.GetCurrentUserId();
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
