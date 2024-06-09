using System.ComponentModel.DataAnnotations;

namespace TaskManagement.Contracts.Requests
{
    public class TaskUpdateRequest : TaskGenericRequest
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public DateTime CreateDate { get; set; }
    }
}