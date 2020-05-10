import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _url: string = "http://localhost:3001/users"

  constructor(private http: HttpClient) { }

  getResults(): Observable<any> {
    return this.http.get<any[]>(this._url);
  }
}
