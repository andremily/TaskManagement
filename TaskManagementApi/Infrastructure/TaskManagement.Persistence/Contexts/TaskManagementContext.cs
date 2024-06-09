using Microsoft.EntityFrameworkCore;
using TaskManagement.Domain.Models;

namespace TaskManagement.Persistence.Contexts
{
    //Es el contexto de la base de datos para la conexion con entityFramework
    public partial class TaskManagementContext : DbContext
    {
        public DbSet<TaskModel> TaskModel { get; set; }

        public TaskManagementContext(DbContextOptions<TaskManagementContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TaskModel>().ToTable("TblTasks").Property(x => x.Id).ValueGeneratedOnAdd();

            
        }
    }
}