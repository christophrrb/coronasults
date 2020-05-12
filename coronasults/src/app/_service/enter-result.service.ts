import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EnterResultService {

	public headers: HttpHeaders;

	constructor(private _http: HttpClient) {
		this.headers = new HttpHeaders();
		this.headers.set('Content-Type', 'application/json')
	}

	enterResult(result: any) {
		console.log('Attempting to post')
		console.log(result.firstName);
		console.log(result.lastName);
		console.log(result.birthdate);
		console.log(result.location);
		this._http.post<any>('http://localhost:3000/users/', {
										"firstName": result.firstName,
										"lastName": result.lastName,
										"birthday": result.birthdate,
										"locationTested": result.locationTested,
										"currentResult": result.currentResult} , {headers: this.headers})
			.subscribe();
	}
}
