import { DiagramService } from './diagram.service';
import { ChatService } from './chat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OVERLAY_KEYBOARD_DISPATCHER_PROVIDER } from '@angular/cdk/overlay/typings/keyboard/overlay-keyboard-dispatcher';
import { startWith, switchMap } from 'rxjs/operators';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Statistik 4 School';
  score = 0;

  chatBot: Subscription;

  constructor(private chatService: ChatService, private _diagram: DiagramService) {

  }

  addScore(amount: number) {
    this.score = this.score + amount;
  }

  ngOnInit() {
    this.startChatting();
    // this.chatBot = interval(30000)
    //   .pipe(
    //     startWith(30000),
    //     switchMap(() => this.chatService.getRandomNumber())
    //   )
    //   .subscribe((res) => {
    //     this.openChatbox();
    //   });
  }

  ngOnDestroy() {
    this.chatBot.unsubscribe();
  }

  openChatbox() {
    this._diagram.chatOpened();
  }

  startChatting() {
    this.chatBot = interval(30000)
      .pipe(
        startWith(30000),
        switchMap(() => this.chatService.getRandomNumber())
      )
      .subscribe((res) => {
        this.openChatbox();
      });
  }

}


