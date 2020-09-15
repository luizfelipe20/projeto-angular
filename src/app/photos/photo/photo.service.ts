import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';


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
            .get<Photo[]>(this.baseUrl + '/photos');
    }
}