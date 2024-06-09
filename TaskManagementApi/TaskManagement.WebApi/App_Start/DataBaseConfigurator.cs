using Microsoft.EntityFrameworkCore;
using TaskManagement.Persistence.Contexts;

namespace TaskManagement.WebApi.App_Start
{
    public static class DataBaseConfigurator
    {
        public static IServiceCollection AddDataBaseContext(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<TaskManagementContext>(options => options.UseSqlServer(connectionString));
            return services;
        }
    }
}