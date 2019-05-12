import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  bands : Observable<any>;
  constructor(private http: HttpClient) {
    const req = this.http.post<any>("https://shenkar-band-it.herokuapp.com/users/getUserData",{id:"5cd6c54ca53c5805d94023e1"});
    req.subscribe((data)=>{
      this.bands = data.bands;
    });
  }

  ngOnInit() {
  }

}
