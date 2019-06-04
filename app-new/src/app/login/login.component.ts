import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../register.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl( null , [Validators.email , Validators.required] ),
    pass: new FormControl( null, Validators.required)
  });
  constructor( private _router:Router, private login_s:RegisterService ) {
  }
  login() {
    if ( !this.loginForm.valid ) {
      console.log('Invalid Form');
      return;
    }
    //console.log(JSON.stringify(this.loginForm.value));
    this.login_s.login(JSON.stringify(this.loginForm.value))
      .subscribe(
        data=>{ console.log(data); this._router.navigate(['/index']); },
        error=> console.error(error)
      )
  }
  ngOnInit() {
  }
}
