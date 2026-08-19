import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loginrequest,LoginResponse } from '../interfaces/loginrequest';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})


export class Auth {
  private apiURL = environment.ServerURL_W5;
  //httpclient= inject(HttpClient);
 
  constructor(private http: HttpClient) {}

login(credentials:Loginrequest){
    const payload = {
      email: credentials.email,
      password: credentials.pwd,
      userId: credentials.userId
    };
    return this.http.post<LoginResponse>(environment.ServerURL+"/api/auth",payload);
}
}