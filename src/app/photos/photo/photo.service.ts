import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable(
    { 
        providedIn: 'root' //Cria objetos singleton
    }
)
export class PhotoService {

    baseUrl = ' http://localhost:3001';

    constructor(private http: HttpClient) {}

    listFromUser() {
        return this.http
            .get<Object[]>(this.baseUrl + '/photos');
    }
}