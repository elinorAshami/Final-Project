import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {}

  register(body:any){
      return this.http.post('http://localhost:3000/user/register',body,{
        observe:'body',
        headers: new HttpHeaders().append('Content-Type' , 'application/json')
      });
  }
}


