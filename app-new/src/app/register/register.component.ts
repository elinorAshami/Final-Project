import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {RegisterService} from "../register.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null,[Validators.email , Validators.required]),
    genre: new FormControl( null, Validators.required),
    instrument: new FormControl( null, Validators.required),
    pass: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required),
  });

  constructor(private _router:Router, private register_s:RegisterService) {}

  ngOnInit() {
  }

  register() {
    if ( !this.registerForm.valid || ( this.registerForm.controls.pass.value != this.registerForm.controls.cpass.value) ) {
      console.log('Invalid Form');
      return;
    }
    this.register_s.register(JSON.stringify(this.registerForm.value))
      .subscribe(
        data=> { console.log(data); this._router.navigate(['/index']);},
        error=> console.error(error)
      )
  }
}

