using System.ComponentModel.DataAnnotations;

namespace TaskManagement.Contracts.Requests
{
    public class TaskRemoveRequest
    {
        [Required]
        public int TaskId { get; set; }
    }
}