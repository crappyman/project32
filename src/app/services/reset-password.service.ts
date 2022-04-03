import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private resetUrl: string =  'http://localhost:7777/api/reset_password/';
  
  constructor(private http:HttpClient) { }
     
     checkTokenValidity(token: String): Observable<any> {
      return this.http.get<any>("http://localhost:7777/api/reset_password/reset_password?token="+ token);
    }
    updatePassword(password: string, userId: number){
      let user ={
        password:password,
        user_id: userId
      }
      return this.http.post<any>("http://localhost:7777/api/reset_password/updatePassword ", user);
    }
    sendEmail(email: string){
      let user = {
        email:email
      }
      return this.http.post<any>("http://localhost:7777/api/reset_password/forgot_password", user);
    }
}
