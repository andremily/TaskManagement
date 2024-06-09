import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  providers:[AuthenticationService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() isUserAuthenticated: boolean = false;
  constructor(private authService: AuthenticationService, private router: Router) { }
  ngOnInit(): void {
   console.log(this.isUserAuthenticated)
  }
  public logout = () => {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
