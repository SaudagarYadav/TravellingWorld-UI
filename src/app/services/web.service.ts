import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({'Content-type':"application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http:HttpClient) { }

  registerNewUser(userData){
    let body = JSON.stringify(userData);
    return this.http.post('/server/api/v2/user', body, httpOption);
  }

  loginUser(userData){
    let body = JSON.stringify(userData);
    return this.http.post('/server/api/v2/user/login', body, httpOption);
  }
}
