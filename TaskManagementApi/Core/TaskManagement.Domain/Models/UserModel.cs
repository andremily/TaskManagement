using System.ComponentModel.DataAnnotations;

namespace TaskManagement.Domain.Models
{
    public class UserModel
    {
        [Key]
        public int Id { get; set; }

        public string? Email { get; set; }
        public string? Password { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
    }
}