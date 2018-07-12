import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  getRandomNumber(): Observable<number> {
    const num = Math.floor((Math.random() * 10) + 1);
    return new Observable((observer) => {
      observer.next(num);
      observer.complete();
    });
  }
}
