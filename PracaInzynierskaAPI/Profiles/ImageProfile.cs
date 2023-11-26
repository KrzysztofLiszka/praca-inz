using AutoMapper;
using PracaInzynierskaAPI.DTOs;
using PracaInzynierskaAPI.Models;

namespace PracaInzynierskaAPI.Profiles
{
    public class ImageProfile : Profile
    {
        public ImageProfile()
        {
            CreateMap<Image, ImageDto>();
        }
    }
}
