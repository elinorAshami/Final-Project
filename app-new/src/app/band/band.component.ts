import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  bandData : Observable<any>;
  id : string;

  constructor( private http: HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    const req = this.http.post<any>("https://shenkar-band-it.herokuapp.com/bands/getBandData",{id: this.id});
    req.subscribe((data)=>{
      this.bandData = data;
      console.log( 'band data:' + JSON.stringify(this.bandData) );
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

  goToEdit(){
    console.log( 'the id is : ' + this.id)
    this.router.navigate(['/editBand' , this.id]  );
  }

}
