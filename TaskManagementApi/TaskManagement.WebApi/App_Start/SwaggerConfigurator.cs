using Microsoft.OpenApi.Models;

namespace TaskManagement.WebApi.App_Start
{
    public static class SwaggerConfigurator
    {
        public static IApplicationBuilder AddUseSwagger(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint(url: "/swagger/v1/swagger.json", name: "Task management Johana");

            });
            return app;
        }

        public static IServiceCollection AddSwaggerComponent(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Task management Johana",
                    Description = "",
                    Contact = new OpenApiContact() { Name = "policies", Email = "mail@mail.com"}
                });
            });

            return services;
        }
    }
}