import { Component } from '@angular/core';
import { OVERLAY_KEYBOARD_DISPATCHER_PROVIDER } from '@angular/cdk/overlay/typings/keyboard/overlay-keyboard-dispatcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Statistik 4 School';
  score = 0;

  addScore(amount: number) {
    this.score = this.score + amount;
  }
}


