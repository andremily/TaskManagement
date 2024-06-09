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
import { AuthenticationService } from './shared/services/authentication.service';
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
  providers: [TaskService, AuthenticationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppComponent implements OnInit {
  title = 'GestionTareas';
  isUserAuthenticated: boolean= false;
  constructor(private authService: AuthenticationService) {
   }
  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
}
}
