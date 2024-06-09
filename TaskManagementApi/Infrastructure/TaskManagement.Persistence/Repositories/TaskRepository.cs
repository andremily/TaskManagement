using TaskManagement.Domain.Models;
using TaskManagement.Persistence.Contexts;

namespace TaskManagement.Persistence.Repositories
{
    public class TaskRepository : Repository<TaskModel>, ITaskRepository
    {
        public TaskRepository(TaskManagementContext taskManagementContext) : base(taskManagementContext)
        {
        }
    }
}