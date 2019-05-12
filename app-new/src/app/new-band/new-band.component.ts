import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html',
  styleUrls: ['./new-band.component.css']
})
export class NewBandComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  public onSubmit(f: NgForm) {
      const objReq = {
          creator : '5cd6c54ca53c5805d94023e1',
          name : f.value.name,
          description: f.value.description,
          icon : f.value.icon,
          genre : f.value.genre
      };
      const req = this.http.post<any>("https://shenkar-band-it.herokuapp.com/bands/createNewBand",objReq);
      req.subscribe((data)=>{
          window.location.href = 'https://shenkar-band-it.herokuapp.com/bands/'+data._id
      })
  }

}
