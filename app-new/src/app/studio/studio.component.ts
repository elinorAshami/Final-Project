import { Component, OnInit } from '@angular/core';
import {BandsService} from "../bands.service";

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})

export class StudioComponent implements OnInit {
  exportedSongs: any = [];
  unexportedSongs: any = [];
  constructor(private bandsService: BandsService) {
    this.bandsService.getAllSongs().subscribe((data) => {
      this.sortSongs(data);
    })
  }

  sortSongs(data) {
    data.forEach((song) => {
      if (song.lastExportedUrl) {
        this.exportedSongs.push(song);
      } else {
        this.unexportedSongs.push(song);
      }
    })
  }

  ngOnInit() {
  }

}
