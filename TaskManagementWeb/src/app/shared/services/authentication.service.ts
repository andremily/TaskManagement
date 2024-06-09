import { Injectable } from '@angular/core';
import { UserRequest } from '../intefaces/UserRequest';
import { UserResponse } from '../intefaces/UserResponse';
import { HttpClient } from '@angular/common/http';
import { Subject, map } from 'rxjs';
import { GeneralResponse } from '../models/GeneralResponse';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  constructor(private http: HttpClient) {}

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  };
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  };
  public loginUser = (route: string, body: UserRequest) => {
    return this.http.post<UserResponse>(
      this.createCompleteRoute(route, environment.apiUrl),
      body
    );
  };
  public logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.sendAuthStateChangeNotification(false);
  };
  public Post(url: string, user: UserRequest) {
    return this.http.post<UserResponse>(environment.apiUrl+url, user ).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
