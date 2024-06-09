import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TaskResponseModel } from '../models/TaskResponse';
import { TaskRemoveRequest } from '../models/TaskRemoveRequest';
import { TaskModel } from '../models/TaskModel';
import { GeneralResponse } from '../models/GeneralResponse';
import { TaskRequest } from '../models/TaskRequest';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  public Get(url: string, userId: number) {
    return this.http.get<TaskResponseModel>(environment.apiUrl+url + '?UserId=' + userId).pipe(
      map((data) => {
        return data;
      })
    );
  }
  public Post(url: string, task: TaskRequest) {
    return this.http.post<GeneralResponse>(environment.apiUrl+url , task ).pipe(
      map((data) => {
        return data;
      })
    );
  }
  public Put(url: string, task: TaskRequest) {
    return this.http.put<GeneralResponse>(environment.apiUrl+url , task ).pipe(
      map((data) => {
        return data;
      })
    );
  }
  public Delete(url: string, taskRemove: TaskRemoveRequest) {
    return this.http.delete<GeneralResponse>(environment.apiUrl+url , { body: taskRemove }).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
