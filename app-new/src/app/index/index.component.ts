import { Component, OnInit } from '@angular/core';
// import { BandsService} from "../bands.service";
// import { Bands } from  '../Bands';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
    // bands : Bands[] =[];


  constructor() {
    // this.bandService.getBands()
    //   .subscribe(bands => {
    //     this.bands = bands;
    //     console.log(this.bands);
    //   })
  }
  ngOnInit() {
  }

}
