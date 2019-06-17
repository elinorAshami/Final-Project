import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../register.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Boolean = false;
  firstName: String;
  lastName: String;
  _id: String;
  icon : String;
  subscription: Subscription;

  constructor(private registerService: RegisterService) {
    this.registerService.user().subscribe(user => {
      this.updateLogin(user);
    });
    this.subscription = this.registerService.getUserObj().subscribe(user =>{
      this.updateLogin(user);
    })
  }

  updateLogin(user) {
    this.isLoggedIn = true;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this._id = user._id;
    this.icon = user.icon;
  }

  ngOnInit() {
  }

}
