using AutoMapper;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;

namespace PracaInzynierskaAPI.Profiles
{
    public class AuthProfile : Profile
    {
        public AuthProfile()
        {
            CreateMap<User, WorkerDto>();
        }
    }
}
