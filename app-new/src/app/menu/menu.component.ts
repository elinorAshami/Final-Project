import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {RegisterService} from "../register.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  bands : any = [];
  subscription: Subscription;
  constructor(private registerService: RegisterService, private http: HttpClient) {
    this.registerService.user().subscribe(data => {
      this.updateBands(data);
    });

    this.subscription = this.registerService.getUserObj().subscribe(data =>{
      console.log('menuComp',data);
      this.updateBands(data);
    })
  }

  updateBands(data) {
    this.bands = data.bands;
  }
  ngOnInit() {
  }

}
