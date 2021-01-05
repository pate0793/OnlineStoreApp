import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subjects = new Subject();

  constructor() { }

  sendMessage(product){
    this.subjects.next(product)
  }

  getMessage(){
    return this.subjects.asObservable()
  }
}
