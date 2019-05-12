import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  bandData : Observable<any>;
  constructor(private http: HttpClient,private route: ActivatedRoute) {
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
    });
    const req = this.http.post<any>("https://shenkar-band-it.herokuapp.com/bands/getBandData",{id});
    req.subscribe((data)=>{
      this.bandData = data;
    });
  }

  ngOnInit() {
  }

}
