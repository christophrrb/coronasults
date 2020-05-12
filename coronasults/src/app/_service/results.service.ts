import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _url: string = "http://localhost:3000/users"

  constructor(private _http: HttpClient) { }

  getResults(user: any): Observable<any> {
    return this._http.get<any>('http://localhost:3000/users/' + user.firstName + '/' + user.lastName + '/' + user.birthdate);
  }
}
