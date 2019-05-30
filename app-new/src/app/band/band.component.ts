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
  id : string;

  constructor(private http: HttpClient,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    const req = this.http.post<any>("https://shenkar-band-it.herokuapp.com/bands/getBandData",{id: this.id});
    req.subscribe((data)=>{
      this.bandData = data;
    });
  }

  public createNewSong() {
      const req = this.http.post<any>("https://shenkar-band-it.herokuapp.com/bands/createNewSong",{id: this.id});
      req.subscribe((data)=>{
        window.location.href = 'https://shenkar-band-it.herokuapp.com/songstudio/?id='+data._id
      })
  }

  ngOnInit() {
  }

}
