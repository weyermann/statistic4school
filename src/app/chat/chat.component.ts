import { DiagramService } from './../diagram.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private _diagram: DiagramService) { }

  ngOnInit() {
  }

  closeChatbox() {
    this._diagram.chatSubmitted();
  }

}
