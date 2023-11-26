using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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
    public class UsersController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IBaseItemService<User> _baseItemService;

        public UsersController(IMapper mapper, IBaseItemService<User> baseItemService)
        {
            _mapper = mapper;
            _baseItemService = baseItemService;
        }

        [HttpGet("GetAllUsers")]
        public async Task<List<WorkerDto>> GetAllUserItems()
        {
            var items = await _baseItemService.GetAllItemsAsync();
            var mappedItems = _mapper.Map<List<WorkerDto>>(items);

            return mappedItems;
        }

        [HttpDelete("DeleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            await _baseItemService.DeleteItemAsync(id);
            return Ok();
        }
    }
}
