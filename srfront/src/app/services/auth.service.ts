import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  public isAuthenticated(): boolean {
    const token =  localStorage.getItem('token')!;
    return !helper.isTokenExpired(token);
  }
}
