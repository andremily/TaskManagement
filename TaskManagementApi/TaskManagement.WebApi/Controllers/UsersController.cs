using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using TaskManagement.Contracts.Requests;
using TaskManagement.Contracts.Response;
using TaskManagement.Domain.Models;
using TaskManagement.Service.Interfaces;
using TaskManagement.Service.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaskManagement.WebApi.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly IUserService _userService;
        private readonly ILogger<UsersController> _logger;
        public UsersController(IUserService userService, ILogger<UsersController> logger)
        {
            _userService = userService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UserRequest userRequest)
        {
            try
            {
                return Ok(await _userService.AddUserServiceAsync(userRequest));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Se presento un error {Message}", ex.Message);
                return BadRequest(new Response { Code = 400, Message = ex.Message });
            }

        }
        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserRequest userRequest)
        {
            try
            {
                return Ok(_userService.Login(userRequest));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Se presento un error {Message}", ex.Message);
                return BadRequest(new Response { Code = 400, Message = ex.Message });
            }

        }


    }
}
