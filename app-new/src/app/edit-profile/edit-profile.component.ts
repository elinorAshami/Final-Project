import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../register.service";
import {ProfileComponent} from "../profile/profile.component";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  firstName: String='';
  lastName: String='';
  email: String='';
  genre: String='';
  icon: String='';
  imageUrl: string = "../../assets/userImg.png";
  fileToUpload: File = null;
  _id : string;


  userForm:FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null,[Validators.email , Validators.required]),
    genre: new FormControl( null, Validators.required),
    icon: new FormControl( null, Validators.required)
  });

  constructor( private _user: RegisterService, private _router: Router, private rout: ActivatedRoute) {

    this._user.user()
      .subscribe(
        data => this.addDetails(data),
        error => console.error(error)
      )
  }
  addDetails(data){
    this._id = data._id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.genre = data.genre;
    this.email = data.email;
    this.icon = data.icon;
  }

  ngOnInit() {
  }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);

    //Show image preview
    var render = new FileReader();
    render.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    render.readAsDataURL(this.fileToUpload);
  }

  updateUser() {
    /*if ( !this.userForm.valid ) {
      console.log('Invalid Form');
      return;
    }*/
    console.log(this.userForm.value);
    const updateObj = Object.assign(this.userForm.value,{id:this._id});
    console.log(updateObj);
    this._user.updateUser( JSON.stringify(updateObj) )
      .subscribe(
        data=> { console.log(data); this._router.navigate(['/profile/:id']);},
        error=> console.error(error)
      )
  }
}
