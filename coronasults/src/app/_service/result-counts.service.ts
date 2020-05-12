import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultCountsService {

  constructor(private _http: HttpClient) { }

  getUndetermined(): Observable<number> {
    return this._http.get<number>('http://localhost:3000/users/countUndetermined');
  }

  getPositive(): Observable<any> {
    return this._http.get<any>('http://localhost:3000/users/countPositive');
  }

  getNegative(): Observable<any> {
    return this._http.get<any>('http://localhost:3000/users/countNegative');
  }
}
