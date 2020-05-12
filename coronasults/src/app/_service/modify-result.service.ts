import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifyResultService {

  public headers: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json')
  }

  modifyResult(result) {
    this._http.patch<any>('http://localhost:3000/users/' + result._id, {
                                  "firstName": result.firstName,
                                  "lastName": result.lastName,
                                  "birthday": result.birthdate,
                                  "locationTested": result.locationTested,
                                  "currentResult": result.currentResult
                                }, {headers: this.headers}).subscribe(() => console.log('patched'))
  }
}
