import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { RegisterComponent } from './authentication/register/register.component';

export const routes: Routes = [
    { path: '',title:"Login", component: LoginComponent },
    { path: 'task',title:"Tareas", component: TaskComponent },
    { path: 'register',title:"Registrar", component: RegisterComponent },
  ];
