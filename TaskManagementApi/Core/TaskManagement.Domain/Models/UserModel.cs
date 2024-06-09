using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
namespace TaskManagement.Domain.Models
{
    public class UserModel 
    { [Key]
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public DateTime CreateDate { get; set; } = DateTime.Now;
    }
}