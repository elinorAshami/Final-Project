import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl( null , [Validators.email , Validators.required] ),
    password: new FormControl( null, Validators.email)
  });
  constructor() {
  }
  login() {
    if ( !this.loginForm.valid ) {
      console.log('Invalid Form');
      return;
    }
    console.log(JSON.stringify(this.loginForm.value));
  }
  ngOnInit() {
  }
}
