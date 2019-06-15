import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor( private http : HttpClient ) {
  }

  updateBand(body:any) {
    console.log('hi from service');
    return this.http.post('http://localhost:3000/band/updateBand'  ,body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  /*getBands() {
    return this.http.get('http://localhost:3000/api/tasks')
      .pipe(
        map(res => res.json())
      )
  }
  addBand(newBand){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/task' , JSON.stringify(newBand), {headers; headers})
      .pipe(
        map( res => res.json())
    )
  }*/
}


