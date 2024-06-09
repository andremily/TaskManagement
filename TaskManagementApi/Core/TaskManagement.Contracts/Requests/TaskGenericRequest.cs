using System.ComponentModel.DataAnnotations;

namespace TaskManagement.Contracts.Requests
{
    //Este modelo es para guarda las tareas 
    public class TaskGenericRequest
    {
        [Required]
        public string Name { get; set; } = String.Empty;
        [Required]
        public string Description { get; set; } = String.Empty;
        [Required]
        public DateTime DueDate { get; set; }

        [Required]
        public bool Completed { get; set; }
        [Required]
        public int UserId { get; set; }
    }
}