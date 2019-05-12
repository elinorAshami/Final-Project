import { Injectable } from '@angular/core';
import { Http , Headers} from "@angular/http";
import {map} from "rxjs/operators";
import {pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor(private http : Http) {
    console.log('Band service initialized...');
  }

  getBands() {
    return this.http.get('http://localhost:3000/api/tasks')
      .pipe(
        map(res => res.json())
      )
  }
  /*addBand(newBand){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/task' , JSON.stringify(newBand), {headers; headers})
      .pipe(
        map( res => res.json())
    )
  }*/
}


