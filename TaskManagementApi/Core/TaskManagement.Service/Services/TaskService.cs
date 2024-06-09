using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using TaskManagement.Contracts.Requests;
using TaskManagement.Contracts.Response;
using TaskManagement.Domain.Models;
using TaskManagement.Persistence.Repositories;
using TaskManagement.Service.Interfaces;

namespace TaskManagement.Service.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;
        private readonly ILogger<TaskService> _logger;
        private readonly IMapper _mapper;
        public TaskService(ITaskRepository taskRepository, ILogger<TaskService> logger, IMapper mapper)
        {
            _taskRepository = taskRepository;
            _logger = logger;
            _mapper = mapper;
        }
        public async Task<Response> AddTaskServiceAsync(TaskRequest taskRequest)
        {
            TaskModel taskModel = _mapper.Map<TaskModel>(taskRequest);
            int response = await _taskRepository.CreateAsync(taskModel);
            if(response != 1)
            {
                _logger.LogInformation("No se pudo crear la tarea, Se ha presentado un error");
                throw new Exception("No se pudo crear la tarea, intentelo mas tarde");
            }
             _logger.LogInformation("Tarea creada exitosamente");
            return new Response { Code = 200, Message = "Tarea creada exitosamente" };
        }

        public async Task<TaskResponse> FindAllTaskByIdServiceAsync(TaskFindRequest taskFindRequest)
        {
            List<TaskModel> taskModels = await _taskRepository.FindAllByCondition(x => x.UserId == taskFindRequest.UserId).ToListAsync();
            if(taskModels == null || taskModels.Count <= 0)
            {
                 _logger.LogInformation("No se encontraron tareas para el usuario {UserId}", taskFindRequest.UserId);
                return new TaskResponse { Code = 200, Message = "El usuario no posee tareas", TaskUser = new List<TaskUser>() };
            }

             return new TaskResponse { Code = 200, Message = "Consulta exitosa", TaskUser = GenerateDataResponse(taskModels) };
        }

        private List<TaskUser> GenerateDataResponse(List<TaskModel> taskModels)
        {
            List<TaskUser> taskUsers = new List<TaskUser>();
            foreach(var item in taskModels)
            {
                taskUsers.Add(_mapper.Map<TaskUser>(item));
            }

            return taskUsers;
        }

        public async Task<Response> RemoveTaskServiceAsync(TaskRemoveRequest taskRemoveRequest)
        {
            IQueryable<TaskModel> queryable = _taskRepository.FindAllByCondition(x => x.Id == taskRemoveRequest.TaskId);
            ValidateErrorNotContent(queryable, taskRemoveRequest.TaskId);
            
            TaskModel taskModel = await queryable.FirstAsync();
            ValidateErrorNotContent(taskModel, taskRemoveRequest.TaskId);

            int response = await _taskRepository.DeleteAsync(taskModel);

            if(response != 1)
            {
                 _logger.LogInformation("Se presento un error al tratar de eliminar la tarea {TaskId}", taskRemoveRequest.TaskId);
                throw new Exception("Se presento un error al tratar de eliminar la tarea");
            }

            return new Response { Code = 200, Message = "Tarea eliminada existosamente"};

        }

        private void ValidateErrorNotContent(object dataValidate, int id)
        {
            if (dataValidate == null)
            {
                _logger.LogInformation("La tarea que trata de eliminar no existe {id}", id);
                throw new Exception("La tarea que trata de eliminar no existe");
            }
        }

        public async Task<Response> UpdateTaskServiceAsync(TaskUpdateRequest taskUpdateRequest)
        {
            TaskModel taskModel = _mapper.Map<TaskModel>(taskUpdateRequest);
            int response = await _taskRepository.UpdateAsync(taskModel);
            if(response != 1)
            {
                 _logger.LogInformation("Se presento un error al tratar de actualizar la tarea {Id}", taskUpdateRequest.Id);
                throw new Exception("Se presento un error al tratar de actualizar la tarea");
            }

             return new Response { Code = 200, Message = "Tarea actualizada existosamente"};
        }
    }
}