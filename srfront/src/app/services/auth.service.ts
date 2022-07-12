import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    const token =  localStorage.getItem('token')!;
    return !helper.isTokenExpired(token);
  }

  login(creds: any): Observable<any> {
    const headers = new HttpHeaders();

    const params = new HttpParams()
      .set('username', creds.username)
      .set('password', creds.password);
    
    return this.http.post(
      'http://localhost:3000/auth/login',
      params, {headers});
  }

  signUp(creds: any): Observable<any> {
    const headers = new HttpHeaders();

    const params = new HttpParams()
      .set('fullname', creds.fullname)
      .set('nickname', creds.nickname)
      .set('email', creds.email)
      .set('password', creds.password);

    return this.http.post('http://localhost:3000/user', params, {headers});
  }
}