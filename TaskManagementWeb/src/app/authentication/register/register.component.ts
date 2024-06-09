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
import { UserForAuthenticationDto } from '../../shared/intefaces/UserForAuthenticationDto';
import { AuthResponseDto } from '../../shared/intefaces/AuthResponseDto';
import { FieldsetModule } from 'primeng/fieldset';
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
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({});
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confimrPassword: new FormControl('', [Validators.required]),
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
    const userForAuth: UserForAuthenticationDto = {
      email: login.username,
      password: login.password
    }
    // this.authService.loginUser('api/Accounts/Login', userForAuth)
    // .subscribe({
    //   next: (res:AuthResponseDto) => {
    //    localStorage.setItem("token", res.token);
    //    this.router.navigate([this.returnUrl]);
    // },
    // error: (err: HttpErrorResponse) => {
    //   this.errorMessage = err.message;
    //   this.showError = true;
    // }})
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
