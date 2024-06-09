using System.ComponentModel.DataAnnotations;

namespace TaskManagement.Domain.Models
{
    public class TaskModel
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
        public DateTime DueDate { get; set; }

        public bool Completed { get; set; }
        
        public int UserId { get; set; }
    }
}