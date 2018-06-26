import { Component } from '@angular/core';
import { EQuestionCategories } from '../model/models';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
  cards = [
    { title: EQuestionCategories[1], route: 'topic-1', cols: 1, rows: 1 },
    { title: EQuestionCategories[2], route: 'topic-2', cols: 1, rows: 1 },
    { title: EQuestionCategories[3], route: 'topic-3', cols: 1, rows: 1 },
    { title: EQuestionCategories[4], route: 'topic-4', cols: 1, rows: 1 }
  ];
}
