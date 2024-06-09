import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { TaskModel } from './shared/models/TaskModel';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DialogModule } from 'primeng/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TaskService } from './shared/services/task.service';
import { first } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { TaskRemoveRequest } from './shared/models/TaskRemoveRequest';
import { GeneralResponse } from './shared/models/GeneralResponse';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TaskRequest } from './shared/models/TaskRequest';
@Component({
  selector: 'app-root',
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
    CheckboxModule
  ],
  providers: [TaskService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'GestionTareas';
  // ListTareas: TaskModel[] = [];
  // Task: TaskRequest = new TaskRequest('', '', new Date(), false, 1);
  // Reload: boolean = false;
  // Visible: boolean = false;
  // form: FormGroup;
  // Operacion: string = 'ADD';
  // Message: GeneralResponse = new GeneralResponse(0, '');
  // VisibleMessage: boolean = false;
  /**
   *
   */
  constructor(
    // private cdr: ChangeDetectorRef,
    // private formbuilder: FormBuilder,
    // private taskServices: TaskService
  ) {
    // this.form = new FormGroup({});
    // // this.form.addControl("Name", new FormControl('', [Validators.required]));
    // // this.form.addControl("Description", new FormControl('', [Validators.required]));
    // this.form.addControl("DueDate", new FormControl('', [Validators.required]));
  }
  ngOnInit(): void {
  //   this.VisibleMessage = false;

  //   this.form = this.formbuilder.group({
  //     Name: ['', Validators.required],
  //     Description: ['', Validators.required],
  //     DueDate: ['', Validators.required],
  //     Completed:[false, Validators.required]
  //   });

  //   this.LoadTask();
  }
  // LoadTask(){
  //   this.Reload = false;
  //   this.taskServices
  //     .Get('', 1)
  //     .pipe(first())
  //     .subscribe(
  //       (data) => {
  //         this.ListTareas = data.TaskUser;
  //         console.log(data);
  //       },
  //       (err) => {
  //         this.Message = new GeneralResponse(
  //           500,
  //           'El servicio no esta disponible.'
  //         );
  //         this.VisibleMessage = true;
  //         console.error(err);
  //       }
  //     );
  //   this.cdr.detectChanges();
  //   this.Reload = true;
  // }
  // Create() {
  //   this.Operacion = 'ADD';
  //   this.Visible = true;
  
  //   // this.Tarea = new TareaModel(0,"","",new Date(),new Date(),false);
  // }
  // Edit(row: TaskModel) {
  //   this.Operacion = 'MOD';
  //   this.Task = row;
  //   this.Visible = true;
    
  // }
  // Delete(row: TaskModel) {
  //   var model = new TaskRemoveRequest(row.Id);
  //   this.taskServices
  //     .Delete('', model)
  //     .pipe(first())
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //       },
  //       (err) => {
  //         console.error(err);
  //       }
  //     );

  //   this.ListTareas = this.ListTareas.filter(
  //     (item) => !this.isMatch(item, row)
  //   );
  //   console.log(row);
  // }
  // isMatch(item: any, reference: any) {
  //   return Object.keys(reference).every((key) => item[key] === reference[key]);
  // }

  // onSubmit() {
  //   console.log('Formulario enviado:', this.form.value);
  //   if (this.form.valid) {
  //     if (this.Operacion == 'ADD') {
  //       //Insertar
  //       this.taskServices
  //       .Post('', this.Task)
  //       .pipe(first())
  //       .subscribe(
  //         (data) => {
  //           console.log(data);
  //           this.Task = new TaskRequest('', '', new Date(), false, 1);
  //           this.LoadTask();
  //         },
  //         (err) => {
  //           console.error(err);
  //         }
  //       );
  //     } else {
  //       this.taskServices
  //       .Put('', this.Task)
  //       .pipe(first())
  //       .subscribe(
  //         (data) => {
  //           console.log(data);
  //           this.Task = new TaskRequest('', '', new Date(), false, 1);
  //           this.LoadTask();
  //         },
  //         (err) => {
  //           console.error(err);
  //         }
  //       );
  //     }
  //   } else {
  //     console.log('Formulario inválido');
  //   }
  //   this.Visible = false;
  // }
  // CompletaTarea(task: TaskModel) {
  //   // this.taskServices
  //   // .Put('', this.Task)
  //   // .pipe(first())
  //   // .subscribe(
  //   //   (data) => {
  //   //     console.log(data);
  //   //     this.Task = new TaskRequest('', '', new Date(), false, 1);
  //   //     this.LoadTask();
  //   //   },
  //   //   (err) => {
  //   //     console.error(err);
  //   //   }
  //   // );
  //   //no
  // }
}
