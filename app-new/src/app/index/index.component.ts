import { Component, OnInit } from '@angular/core';
import {IndexService} from "../index.service";
import {PlayerService} from "../player.service";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  topSongs: any;
  topBands: any;
  featuredMain: Object = {};
  featured: any;

  constructor(private _index:IndexService, private playerService: PlayerService) {
    this._index.getIndexData().subscribe(
      data => {
        this.updateData(data);
      }, err => {
        console.error(err);
      }
    )
  }

  playSong(songId,songUrl) {
    const audioObj = {
      songId,songUrl
    };
    this.playerService.sendToPlayer(audioObj);
  }

  updateData(data) {
    this.topSongs = data.topSongs;
    this.topBands = data.topBands;
    this.featuredMain = data.featuredMain;
    this.featured = data.featured;
  }

  ngOnInit() {
  }

}
