using AutoMapper;
using Microsoft.Extensions.Logging;
using System;
using TaskManagement.Contracts.Requests;
using TaskManagement.Contracts.Response;
using TaskManagement.Domain.Models;
using TaskManagement.Persistence.Repositories;
using TaskManagement.Service.Interfaces;

namespace TaskManagement.Service.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository<UserModel> _userRepository;
        private readonly ILogger<UserService> _logger;
        private readonly IMapper _mapper;
        public UserService()
        {
        }

        public async Task<Response> AddUserServiceAsync(UserRequest userRequest)
        {
            UserModel taskModel = _mapper.Map<UserModel>(userRequest);
            int response = 0;//await _userRepository.CreateAsync(userRequest);
            if (response != 1)
            {
                _logger.LogInformation("No se pudo crear el usuario, Se ha presentado un error");
                throw new Exception("No se pudo crear el usuario, intentelo mas tarde");
            }
            _logger.LogInformation("Usuario creado exitosamente");
            return new Response { Code = 200, Message = "Usuario creado exitosamente" };
        }

      
    }
}

