import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ApiService } from './api.service';
import { AuthResponse } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // isLogged normally is assigned inside method saveUser and additionally should be implemented
  // method refreshToken to log in user after page reloading. So I assigned isLogged here just for this app
  // to imitate refreshToken functionality.
  private isLogged = !!localStorage.getItem('token');
  token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

  constructor(private apiService: ApiService) {
  }

  loginUser(credentials): Observable<boolean> {
    return this.apiService.loginUser(credentials)
      .pipe(
        switchMap(res => {
          if (res.success) {
            this.saveUser(res);
            return of(res.success);
          } else {
            return throwError('Can\'t sign in');
          }
        })
      );
  }

  registerUser(credentials): Observable<boolean> {
    return this.apiService.registerUser(credentials)
      .pipe(
        switchMap(res => {
          if (res.success) {
            this.saveUser(res);
            return of(res.success);
          } else {
            return throwError('Can\'t register');
          }
        })
      );
  }

  saveUser(res: AuthResponse): void {
    this.isLogged = res.success;
    this.token = res.token;
    localStorage.setItem('token', res.token);
  }

  get userStatus(): boolean {
    return this.isLogged;
  }
}
