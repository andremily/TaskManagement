import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { HeaderComponent } from '../../base/header/header.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FooterComponent } from '../../base/footer/footer.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { ModalMessageComponent } from '../modal-message/modal-message.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TaskService } from '../../shared/services/task.service';
import { TaskModel } from '../../shared/models/TaskModel';
import { TaskRequest } from '../../shared/models/TaskRequest';
import { GeneralResponse } from '../../shared/models/GeneralResponse';
import { first } from 'rxjs';
import { TaskRemoveRequest } from '../../shared/models/TaskRemoveRequest';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    RouterOutlet,
    DialogModule,
    HeaderComponent,
    AvatarModule,
    AvatarGroupModule,
    FooterComponent,
    TableModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FloatLabelModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    HttpClientModule,
    ModalMessageComponent,
    CheckboxModule,
  ],
  providers: [TaskService],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TaskComponent implements OnInit {
  title = 'GestionTareas';
  ListTareas: TaskModel[] = [];
  Task: TaskRequest = new TaskRequest('', '', new Date(), false, 1);
  Reload: boolean = false;
  Visible: boolean = false;
  form: FormGroup;
  Operacion: string = 'ADD';
  Message: GeneralResponse = new GeneralResponse(0, '');
  VisibleMessage: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private formbuilder: FormBuilder,
    private taskServices: TaskService
  ) {
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.VisibleMessage = false;

    this.form = this.formbuilder.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      DueDate: ['', Validators.required],
      Completed: [false, Validators.required],
    });

    this.LoadTask();
  }
  LoadTask() {
    this.Reload = false;
    this.cdr.detectChanges();

    this.taskServices
      .Get('/api/v1/Task', 1)
      .pipe(first())
      .subscribe(
        (data) => {
          this.ListTareas = data.TaskUser;
        },
        (err) => {
          this.Message = new GeneralResponse(
            500,
            'El servicio no esta disponible.'
          );
          this.VisibleMessage = true;
          console.error(err);
        }
      );
    this.cdr.detectChanges();
    this.Reload = true;
  }
  Create() {
    this.Operacion = 'ADD';
    this.Visible = true;
  }
  Edit(row: TaskModel) {
    this.Operacion = 'MOD';
    this.Task = row;
    this.Visible = true;
  }
  Delete(row: TaskModel) {
    this.VisibleMessage = false;
    this.cdr.detectChanges();
    var model = new TaskRemoveRequest(row.Id);
    this.taskServices

      .Delete('/api/v1/Task', model)
      .pipe(first())
      .subscribe(
        (data) => {
          this.Message = data;
          this.VisibleMessage = true;
          console.log(data);
        },
        (err) => {
          console.error(err);
        }
      );

    this.ListTareas = this.ListTareas.filter(
      (item) => !this.isMatch(item, row)
    );
    console.log(row);
  }
  isMatch(item: any, reference: any) {
    return Object.keys(reference).every((key) => item[key] === reference[key]);
  }

  onSubmit() {
    this.VisibleMessage = false;
    this.cdr.detectChanges();
    if (this.form.valid) {
      if (this.Operacion == 'ADD') {
        this.AddTask();
      } else {
        this.UpdateTask(this.Task);
      }
    }
    this.Visible = false;
  }
  AddTask() {
    this.taskServices
      .Post('/api/v1/Task', this.Task)
      .pipe(first())
      .subscribe(
        (data) => {
          this.Message = data;
          this.VisibleMessage = true;
          console.log(data);
          this.Task = new TaskRequest('', '', new Date(), false, 1);
          this.cdr.detectChanges();
          this.LoadTask();
        },
        (err) => {
          console.error(err);
        }
      );
  }
  UpdateTask(task: TaskRequest) {
    this.taskServices
      .Put('/api/v1/Task', task)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          this.Message = data;
          this.VisibleMessage = true;
          console.log(data);
          this.Task = new TaskRequest('', '', new Date(), false, 1);
          this.cdr.detectChanges();
          this.LoadTask();
        },
        (err) => {
          console.error(err);
        }
      );
  }
  CompletTask(task: TaskModel) {
    this.VisibleMessage = false;
    this.cdr.detectChanges();
    this.UpdateTask(task);
  }
}
