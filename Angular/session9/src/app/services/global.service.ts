import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient ) { }

  baseUrl = "https://full.faedg.com/public/api"
  isLogin = false

  login(body:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/client/customer_login` , body)
  }

  getProfile():Observable<any>{
    return this.http.get(`${this.baseUrl}/client/profile`)
  }
  changeUserImage(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/update-profile-image` , obj)
  }
}
