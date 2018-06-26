import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-question-intro',
  templateUrl: './question-intro.component.html',
  styleUrls: ['./question-intro.component.css']
})
export class QuestionIntroComponent implements OnInit, AfterContentInit {

  @Input() topicTitle = 'Default title';
  @Input() topicQuestion = 'Default title';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    d3.select('p').style('color', 'red');
  }

}
