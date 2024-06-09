import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ModalMessageComponent } from '../../components/modal-message/modal-message.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { AuthenticationService } from '../../shared/services/authentication.service';

import { UserResponse } from '../../shared/intefaces/UserResponse';
import { FieldsetModule } from 'primeng/fieldset';
import { UserRequest } from '../../shared/intefaces/UserRequest';
import { first } from 'rxjs';
import { GeneralResponse } from '../../shared/models/GeneralResponse';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FloatLabelModule,
    FieldsetModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalMessageComponent,
    CheckboxModule,
    CardModule,
  ],
  providers: [AuthenticationService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  showError: boolean = false;
  Message: GeneralResponse = new GeneralResponse(0, '');
  VisibleMessage:boolean= false;
  
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({});
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
  validateControl = (controlName: string) => {
    return this.loginForm.get(controlName)!.invalid && this.loginForm.get(controlName)!.touched
  }
  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName)!.hasError(errorName)
  }
  
  registerUser = (loginFormValue:any) => {
    this.showError = false;
    const login = {... loginFormValue };
    const userRequest: UserRequest = {
      email: login.username,
      password: login.password
    }
    this.authService.Post('/api/v1/Users', userRequest)
    .pipe(first())
    .subscribe(
      (data) => {
        this.Message = data;
        this.VisibleMessage = true;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  matchValuesValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const controlValue = control.get(controlName)?.value;
        const matchingControlValue = control.get(matchingControlName)?.value;

        if (controlValue !== matchingControlValue) {
            return { 'matchValues': true };
        } else {
            return null;
        }
    };
}
}
