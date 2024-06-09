using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManagement.Domain.Models;

namespace TaskManagement.Persistence.Contexts
{
    public class UserManagementContext : DbContext
    {
        public DbSet<UserModel> UserModel { get; set; }

        public UserManagementContext(DbContextOptions<UserManagementContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>().ToTable("TblUsers").Property(x => x.Id).ValueGeneratedOnAdd();


        }
    }
}