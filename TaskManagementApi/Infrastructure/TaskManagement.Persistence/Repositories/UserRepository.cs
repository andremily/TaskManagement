using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using TaskManagement.Persistence.Contexts;

namespace TaskManagement.Persistence.Repositories
{
    public class UserRepository<T> : IUserRepository<T> where T : class
    {

        public readonly UserManagementContext _userManagementContext;
        public UserRepository(UserManagementContext userManagementContext)
        {
            _userManagementContext = userManagementContext;
        }
        //public Task<int> CreateAsync(T entity)
        //{
        //    await _userManagementContext.Set<T>().AddAsync(entity);
        //    return await SaveAsync();
        //}


        public IQueryable<T> FindAllByCondition(System.Linq.Expressions.Expression<Func<T, bool>> expression)
        {
            throw new NotImplementedException();
        }
       
    }
}
