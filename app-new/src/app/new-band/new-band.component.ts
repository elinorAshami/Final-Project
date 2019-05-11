import { Component, OnInit } from '@angular/core';
import {Bands} from "../Bands";
import {BandsService} from "../bands.service";

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html',
  styleUrls: ['./new-band.component.css']
})
export class NewBandComponent implements OnInit {
  bandName : string;
  janner : string;
  description : string;
  bands : Bands[] =[];

  constructor(private bandService: BandsService) { }

  /*createBand(event){
    event.preventDefault();
    var newBand = {
        bandname: this.bandName,
        bandtype: this.janner,
        discription: this.description
      }
      this.bandService.addBand(newBand)
        .subscribe( band => {
          this.bands.push(band);
        })
  }*/
  ngOnInit() {
  }

}
