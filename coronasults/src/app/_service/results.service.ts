import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _url: string = "localhost:3001/users"

  constructor(private http: HttpClient) { }

  getResults(): void {
    console.log(this.http.get<any[]>(this._url));
  }
}
