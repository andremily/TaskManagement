import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TaskService } from './shared/services/task.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideAnimations(),
    BrowserModule,
    HttpClientModule,
    HttpClient,
    TaskService,
    FormsModule]
};
