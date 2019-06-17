import { Component, OnInit } from '@angular/core';
import { BandsService} from "../bands.service";
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-favoriets',
  templateUrl: './favoriets.component.html',
  styleUrls: ['./favoriets.component.css']
})
export class FavorietsComponent implements OnInit {

  favorites:any;
  constructor(private bandsService: BandsService, private playerService: PlayerService) {
    this.bandsService.getFavorites().subscribe(
      data => {
        this.setFavorites(data);
    },err => {
        console.error(err);
      })
  }

  setFavorites(data) {
    this.favorites = data;
  }

  playFavorite(songId) {
    this.playerService.sendToPlayer({songId});
  }

  ngOnInit() {
  }

}
