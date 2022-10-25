import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TestService {

   getapiurl:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }
  getUsersData():Observable<User[]>{
    return this.http.get<User[]>(this.getapiurl);
  }
}
