import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UserForAuthenticationDto } from '../../shared/intefaces/UserForAuthenticationDto';
import { AuthResponseDto } from '../../shared/intefaces/AuthResponseDto';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { ModalMessageComponent } from '../../components/modal-message/modal-message.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterOutlet,
    ButtonModule,
    MessagesModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FloatLabelModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalMessageComponent,
    CheckboxModule,
    CardModule, FieldsetModule],
    providers:[AuthenticationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent implements OnInit {
  private returnUrl: string = "";
  
  loginForm: FormGroup;
  errorMessage: string = '';
  showError: boolean = false;
  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { 
    this.loginForm = new FormGroup({});
  }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
    console.log(this.route.snapshot.queryParams['returnUrl']);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  validateControl = (controlName: string) => {
    return this.loginForm.get(controlName)!.invalid && this.loginForm.get(controlName)!.touched
  }
  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName)!.hasError(errorName)
  }
  
  loginUser = (loginFormValue:any) => {
    this.showError = false;
    const login = {... loginFormValue };
    const userForAuth: UserForAuthenticationDto = {
      email: login.username,
      password: login.password
    }
    this.authService.loginUser('api/Accounts/Login', userForAuth)
    .subscribe({
      next: (res:AuthResponseDto) => {
       localStorage.setItem("token", res.token);
       this.router.navigate([this.returnUrl]);
    },
    error: (err: HttpErrorResponse) => {
      this.errorMessage = err.message;
      this.showError = true;
    }})
  }
}