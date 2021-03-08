import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { EmailValidator } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

import { catchError,tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from '../login/user.model';


interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable ({providedIn: 'root'})
export class AuthService {
  user = new Subject<User>();


  constructor(private http: HttpClient){


  }

  signup(email: string, password: string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVCnZ9R6Ey9GvyhuiSQFGEoXUhc2VMp8I',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }

    ).pipe(catchError(errorRes =>{
      let errorMessage = 'An unknown error occured!';
      if (!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exists';

      }
      return throwError(errorMessage);
    }), tap(resData =>{
      const expirationDate= new Date(new Date().getTime() + +resData.expiresIn * 1000);
      const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
      this.user.next(user);
    })
    );

  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVCnZ9R6Ey9GvyhuiSQFGEoXUhc2VMp8I',
    {
      email: email,
      password: password,
      returnSecureToken: true

    }
    ).pipe(catchError(errorRes =>{
      let errorMessage = 'An unknown error occured!';
      if (!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'Email ID not found';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Invalid password!';
          break;
      }
      return throwError(errorMessage);
    }), tap(resData =>{
      const expirationDate= new Date(new Date().getTime() + +resData.expiresIn * 1000);
      const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
      this.user.next(user);
    }));
  }

}
