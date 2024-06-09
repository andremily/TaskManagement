using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using TaskManagement.Persistence.Contexts;

namespace TaskManagement.Persistence.Repositories
{
    //patron repositorio para interactuar con la base de datos
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly TaskManagementContext _taskManagementContext;
        public Repository(TaskManagementContext taskManagementContext)
        {
            _taskManagementContext = taskManagementContext;
        }
        public async Task<int> CreateAsync(T entity)
        {
            await _taskManagementContext.Set<T>().AddAsync(entity);
            return await SaveAsync();
        }


        public async Task<int> DeleteAsync(T entity)
        {
            _taskManagementContext.Set<T>().Remove(entity);
            return await SaveAsync();
        }

        public IQueryable<T> FindAllByCondition(Expression<Func<T, bool>> expression)
        {
            return _taskManagementContext.Set<T>().Where(expression).AsNoTracking();
        }


        public async Task<int> UpdateAsync(T entity)
        {
            _taskManagementContext.Set<T>().Update(entity);
            return await SaveAsync();
        }


        private async Task<int> SaveAsync()
        {
            return await _taskManagementContext.SaveChangesAsync();
        }
    }
}