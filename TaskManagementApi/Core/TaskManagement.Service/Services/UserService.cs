using AutoMapper;
using Microsoft.Extensions.Logging;
using System;
using System.IdentityModel.Tokens.Jwt;
using TaskManagement.Contracts.Requests;
using TaskManagement.Contracts.Response;
using TaskManagement.Domain.Models;
using TaskManagement.Persistence.Repositories;
using TaskManagement.Service.Interfaces;

namespace TaskManagement.Service.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly ILogger<UserService> _logger;
        private readonly IMapper _mapper;
        private readonly JwtHandler _jwtHandler;
        public UserService(IUserRepository userRepository, ILogger<UserService> logger, IMapper mapper, JwtHandler jwtHandler)
        {
            _userRepository = userRepository;
            _logger = logger;
            _mapper = mapper;
            _jwtHandler = jwtHandler;
        }

        public async Task<Response> AddUserServiceAsync(UserRequest userRequest)
        {
            UserModel userModel = _mapper.Map<UserModel>(userRequest);
            int response = await _userRepository.CreateAsync(userModel);
            if (response != 1)
            {
                _logger.LogInformation("No se pudo crear el usuario, Se ha presentado un error");
                throw new Exception("No se pudo crear el usuario, intentelo mas tarde");
            }
            _logger.LogInformation("Usuario creado exitosamente");
            return new Response { Code = 200, Message = "Usuario creado exitosamente" };
        }

        public UserLoginResponse Login(UserRequest userRequest)
        {
            UserModel userModel = _mapper.Map<UserModel>(userRequest);
            UserModel userResponse = _userRepository.LoginUser(userModel);
            if(userResponse == null || String.IsNullOrEmpty(userResponse.Email))
            {
                _logger.LogInformation("El Usuario no existe");
                throw new Exception("Usuario o contraseña errada");
            }
            var signingCredentials = _jwtHandler.GetSigningCredentials();
            var claims = _jwtHandler.GetClaims(userResponse);
            var tokenOptions = _jwtHandler.GenerateTokenOptions(signingCredentials, claims);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return new UserLoginResponse { Code = 200, Message = "", Email = userResponse.Email, IdUser = userResponse.Id, Token = token };
        }
    }
}

