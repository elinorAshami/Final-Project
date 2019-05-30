import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl( null , [Validators.email , Validators.required] ),
    password: new FormControl( null, Validators.email)
  });
  login() {
    if ( !this.loginForm.valid ) {
      console.log('Invalid Form');
      return;
    }
    console.log(JSON.stringify(this.loginForm.value));
  }
  constructor() { }

  ngOnInit() {
  }

}
