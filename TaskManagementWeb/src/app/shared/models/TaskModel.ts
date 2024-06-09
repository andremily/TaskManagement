export class TaskModel {
  Id!: number;
  Name: string;
  Description: string;
  DueDate: Date;
  CreateDate: Date;
  Completed: boolean;
  UserId: number
  constructor(
  Id: number,
  Name: string,
  Description: string,
  DueDate: Date,
  CreateDate: Date,
  Completed: boolean,
  UserId: number
  ) {
    this.Id = Id;
    this.Name = Name;
    this.Description = Description;
    this.DueDate = DueDate;
    this.CreateDate = CreateDate;
    this.Completed = Completed;
    this.UserId = UserId;
  }
}
