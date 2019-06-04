import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../register.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  firstName:String='';
  lastName:String='';

  constructor(private _user:RegisterService, private _router:Router) {
    this._user.user()
      .subscribe(
        data=>this.addName(data),
        error=>this._router.navigate(['/login'])
      )
  }
  addName(data){
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }

  ngOnInit() {
  }

  logout(){
    this._user.logout()
      .subscribe(
        data=>{ console.log(data); this._router.navigate(['/login'])},
        error=>console.error(error)
      )
  }

}
