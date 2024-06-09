using System.Linq.Expressions;

namespace TaskManagement.Persistence.Repositories
{
    public interface IRepository<T>
    {
        IQueryable<T> FindAllByCondition(Expression<Func<T, bool>> expression);
        Task<int> CreateAsync(T entity);
        Task<int> UpdateAsync(T entity);
        Task<int> DeleteAsync(T entity);
    }
}