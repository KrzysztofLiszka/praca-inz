using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Constants;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;
using PracaInzynierskaAPI.Services.Interfaces;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = Roles.SystemAdmin)]
    public class UsersController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IBaseItemService<User> _baseItemService;
        private readonly ICurrentUserService _currentUserService;

        public UsersController(IMapper mapper, IBaseItemService<User> baseItemService, ICurrentUserService currentUserService)
        {
            _mapper = mapper;
            _baseItemService = baseItemService;
            _currentUserService = currentUserService;
        }

        [HttpGet("GetAllUsers")]
        public async Task<List<WorkerDto>> GetAllUserItems()
        {
            var items = await _baseItemService.GetAllItemsAsync();
            var filteredItems = items.Where(item => item.Id != _currentUserService.GetCurrentUserId()).ToList();
            var mappedItems = _mapper.Map<List<WorkerDto>>(filteredItems);

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
