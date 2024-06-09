namespace TaskManagement.Contracts.Response
{
    public class TaskResponse : Response
    {
       public List<TaskUser> TaskUser  { get; set; } 
    }

    public class TaskUser
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime CreateDate { get; set; }
        public bool Completed { get; set; }
        public int UserId { get; set; }

    }
}