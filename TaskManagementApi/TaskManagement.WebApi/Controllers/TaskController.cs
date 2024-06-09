using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TaskManagement.Contracts.Requests;
using TaskManagement.Contracts.Response;
using TaskManagement.Service.Interfaces;

namespace TaskManagement.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;
        private readonly ILogger<TaskController> _logger;
        public TaskController(ITaskService taskService, ILogger<TaskController> logger)
        {
            _taskService = taskService;
            _logger = logger;
        }

   
        [HttpGet]
        
        public async Task<IActionResult> Get([FromQueryAttribute] TaskFindRequest taskFindRequest)
        {
            try
            {
                return Ok(await _taskService.FindAllTaskByIdServiceAsync(taskFindRequest));
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "Se presento un error {Message}", ex.Message);
                return BadRequest(new TaskResponse { Code = 400, Message = "Se presento un error, intentelo mas tarde"});
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TaskRequest taskRequest)
        {
            try
            {
                return Ok(await _taskService.AddTaskServiceAsync(taskRequest));
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "Se presento un error {Message}", ex.Message);
                return BadRequest(new TaskResponse { Code = 400, Message = ex.Message});
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] TaskUpdateRequest taskUpdateRequest)
        {
            try
            {
                return Ok(await _taskService.UpdateTaskServiceAsync(taskUpdateRequest));
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "Se presento un error {Message}", ex.Message);
                return BadRequest(new TaskResponse { Code = 400, Message = ex.Message});
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody] TaskRemoveRequest taskRemoveRequest)
        {
            try
            {
                return Ok(await _taskService.RemoveTaskServiceAsync(taskRemoveRequest));
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "Se presento un error {Message}", ex.Message);
                return BadRequest(new TaskResponse { Code = 400, Message = ex.Message});
            }
        }
    }
    
}