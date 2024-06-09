export class TaskRequest {
  Name: string;
  Description: string;
  DueDate: Date;
  Completed: boolean;
  UserId: number
  constructor(
  Name: string,
  Description: string,
  DueDate: Date,
  Completed: boolean,
  UserId: number
  ) {
    this.Name = Name;
    this.Description = Description;
    this.DueDate = DueDate;
    this.Completed = Completed;
    this.UserId = UserId;
  }
}
