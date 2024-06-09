using AutoMapper;
using TaskManagement.Contracts.Requests;
using TaskManagement.Contracts.Response;
using TaskManagement.Domain.Models;

namespace TaskManagement.Service.Mappers
{
    public class AuthMapperProfile : Profile
    {
        public AuthMapperProfile()
        {
             CreateMap<TaskModel, TaskUser>();
             CreateMap<TaskRequest, TaskModel>();
             CreateMap<TaskUpdateRequest, TaskModel>();
             CreateMap<UserRequest, UserModel>();
        }
    }
}