import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {BandsService} from "../bands.service";

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  bandData : Object = {};
  bandId : string;

  constructor( private http: HttpClient, private route: ActivatedRoute, private router: Router ,private bandsService: BandsService) {
    this.route.params.subscribe(params => {
      this.bandId = params['id'];
    });
    this.bandsService.getBandData({id: this.bandId}).subscribe((data) => {
      this.bandData = data;
    },(err) => {
      console.error(err);
    });
  }

  createNewSong() {
      this.bandsService.createNewSong({id: this.bandId}).subscribe((data) => {
        this.redirectToStudio(data);
      },(err) => {
        console.error(err);
      });
  }

  redirectToStudio(data) {
    window.location.href = 'https://shenkar-band-it.herokuapp.com/songstudio/?id='+ data._id
  }

  ngOnInit() {
  }

  // goToEdit(){
  //   console.log( 'the id is : ' + this.id)
  //   this.router.navigate(['/editBand' , this.id]  );
  // }

}
