import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: object[] = [];

  constructor(private http: HttpClient) {
    this.http
    .get<object[]>('http://localhost:3001/photos')
    .subscribe(
      photos => this.photos = photos,
      err => console.log(err.message)
    );
  }

}
