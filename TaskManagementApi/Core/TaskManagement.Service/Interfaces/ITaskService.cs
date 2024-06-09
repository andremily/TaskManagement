using TaskManagement.Contracts.Requests;
using TaskManagement.Contracts.Response;

namespace TaskManagement.Service.Interfaces
{
    public interface ITaskService
    {
        Task<TaskResponse> FindAllTaskByIdServiceAsync(TaskFindRequest taskFindRequest);

        Task<Response> AddTaskServiceAsync(TaskRequest taskRequest);

        Task<Response> UpdateTaskServiceAsync(TaskUpdateRequest taskUpdateRequest);

        Task<Response> RemoveTaskServiceAsync(TaskRemoveRequest taskRemoveRequest);
    }
}