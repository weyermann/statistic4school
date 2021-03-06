import { DiagramService } from './../diagram.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EQuestionCategories } from '../model/models';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {

  events: string[] = [];
  opened: boolean;

  public topic1;
  public topic2;
  public topic3;
  public topic4;

  public score: number;

  public chatBoxVisible = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _diagram: DiagramService
  ) {

    this._diagram.anwerSubmittedChanged$.subscribe((value) => {
      this.score = this.score + value;
    });

    this._diagram.chatOpenedChanged$.subscribe((value) => {
      this.chatBoxVisible = true;
    });

    this._diagram.chatSubmittedChanged$.subscribe((value) => {
      this.chatBoxVisible = false;
    });

    this.topic1 = EQuestionCategories[1];
    this.topic2 = EQuestionCategories[2];
    this.topic3 = EQuestionCategories[3];
    this.topic4 = EQuestionCategories[4];

    this.score = 0;
    this.chatBoxVisible = false;
  }
}
