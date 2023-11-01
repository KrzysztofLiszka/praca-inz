using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    public abstract class BaseItemController<T> : ControllerBase
    {
        private readonly IBaseItemService<T> _baseItemService;

        protected BaseItemController(IBaseItemService<T> baseItemService)
        {
            _baseItemService = baseItemService;
        }

        [HttpGet("GetAll")]
        public async Task<List<T>> GetAllItems()
        {
            var items = await _baseItemService.GetAllItemsAsync();

            return items;
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

        [HttpPost("Add")]
        public async Task<IActionResult> AddItem(T item)
        {
            await _baseItemService.AddItemAsync(item);

            return Ok();
        }

        [HttpPut("Edit")]
        public async Task<IActionResult> EditItem(T item)
        {
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
