using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using TaskManagement.Domain.Models;
using TaskManagement.Persistence.Contexts;

namespace TaskManagement.Persistence.Repositories
{
    public class UserRepository : Repository<UserModel>, IUserRepository
    {
        private readonly TaskManagementContext _taskManagementContext;
        public UserRepository(TaskManagementContext taskManagementContext) : base(taskManagementContext)
        {
            _taskManagementContext = taskManagementContext;
        }

        public UserModel LoginUser(UserModel userModel)
        {
            UserModel user = _taskManagementContext.Set<UserModel>().FirstOrDefault(x => x.Email == userModel.Email && x.Password == userModel.Password)!;
            return user;
        }
    }
}