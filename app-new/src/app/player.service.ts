import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private subject = new Subject<any>();

  constructor() { }

  sendToPlayer(audio: any) {
    this.subject.next(audio);
  }

  playAudio(): Observable<any> {
    return this.subject.asObservable();
  }
}
