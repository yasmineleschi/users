import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { User } from '../model-user/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Users : User[] = [];

  baseUrl = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  getUsers = () : Observable<User[]> =>{
    return this.http.get<User[]>(`${this.baseUrl}/users`, );
  }

  addUser = (user : Object) : Observable<User>=>{
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
        )
    };
    return(this.http.post<User>(
      `${this.baseUrl}/users`,
      user,
      options));
  }

  getUserById = (id : number) : Observable<User>=> {
        return this.http.get<User>(`${this.baseUrl}/users/${id}`)
  }

  Edituser = (user : User) : Observable<User>=>{
        const options = {
          headers: new HttpHeaders({ 'content-type': 'application/json'})
        };
        const body = {
          email : user.email,
          password : user.password,
          name : user.name
        }

        return(this.http.put<User>(`${this.baseUrl}/users/${user.id}`, body, options));
      }

      deleteUser = (id : number) : Observable<Object> =>{
        return this.http.delete(`${this.baseUrl}/users/${id}`)
      }



  }




