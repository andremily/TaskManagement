import { GeneralResponse } from './GeneralResponse';
import { TaskModel } from './TaskModel';

export class TaskResponseModel extends GeneralResponse {
  TaskUser: TaskModel[];
  constructor(Code: number, Message: string, TaskUser: TaskModel[]) {
    super(Code, Message);
    this.TaskUser = TaskUser;
  }
}
