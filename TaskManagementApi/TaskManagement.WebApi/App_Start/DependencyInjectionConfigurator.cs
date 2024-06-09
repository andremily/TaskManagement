using TaskManagement.Persistence.Repositories;
using TaskManagement.Service.Interfaces;
using TaskManagement.Service.Services;

namespace TaskManagement.WebApi.App_Start
{
    public static class DependencyInjectionConfigurator
    {
        public static void AddDependencyInjection(this IServiceCollection services)
        {
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<ITaskRepository, TaskRepository>();
            services.AddScoped<ITaskService, TaskService>();
            services.AddScoped<JwtHandler>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();


        }
    }
}