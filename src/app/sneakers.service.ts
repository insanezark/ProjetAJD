import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http'

import { Sneakers } from './Sneakers';

@Injectable()
export class SneakersService {
//URLs for CRUD operations


sneakers: Sneakers[];
public headers : Headers;

constructor(public http: Http) {
this.headers = new Headers();
this.headers.append("content-type", "application/json");
}


	getAllSneakers(): Observable<Sneakers[]>{
		let url = "http://localhost:8080/sneakers";
		return this.http.get(url, {headers: this.headers})
		.map(res => res.json() as Sneakers[]);
	}

	getSneakers(marque): Observable<Sneakers[]>{
		let url="http://localhost:8080/sneakers/"+marque;
		return this.http.get(url, {headers: this.headers})
		.map(res => res.json() as Sneakers[]);
	}	

}    