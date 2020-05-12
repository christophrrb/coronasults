import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  getUser(user: any): Observable<any> {
    return this._http.get<any>('http://localhost:3000/users/' + user.firstName + '/' + user.lastName + '/' + user.birthdate);
  }
}
