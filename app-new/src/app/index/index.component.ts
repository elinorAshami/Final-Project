import { Component, OnInit } from '@angular/core';
import { BandsService} from "../bands.service";
import { Bands} from "../Bands";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  bands: Bands[];

  constructor(private bandService:BandsService) {
    this.bandService.getBands()
      .subscribe(bands => {
        this.bands = bands;
      })
  }

  ngOnInit() {
  }

}
