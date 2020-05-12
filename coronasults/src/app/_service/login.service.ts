import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  getUser() {
    
  }

  /*
  getUser(user: any): Object {
    let result = this._http.get<any>('http://localhost:3001/users');
    if ((result[0] == undefined) || (result[0] == {})) {
      return {};
    } else {
      return result[0];
    }
  }
  */
}
