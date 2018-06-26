import { EDiagramTypes } from './../model/models';
import { DiagramService } from './../diagram.service';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusMonitorService } from '../status-monitor.service';
import { PartialObserver } from 'rxjs';


@Component({
  selector: 'app-topic-base',
  templateUrl: './topic-base.component.html',
  styleUrls: ['./topic-base.component.css']
})
export class TopicBaseComponent implements OnInit {

  public diagramSelectionObserver: PartialObserver<any>;

  public topicID: number;
  public topicTitle = '';
  public topicQuestion = '';

  public diagramType: number;


  constructor(
    private _route: ActivatedRoute,
    public _monitor: StatusMonitorService,
    private _diagram: DiagramService) {

    this._diagram.diagramSelectionChanged$.subscribe((value) => {

      switch (value) {
        case 'bar': this.diagramType = 1;
          break;

        case 'pie': this.diagramType = 2;
          break;

        case 'bubble': this.diagramType = 3;
          break;

        case 'map': this.diagramType = 4;
          break;

        case 'spider': this.diagramType = 5;
          break;
      }
    });

  }

  ngOnInit() {
    this._route.data
      .subscribe((data) => {
        this.topicID = data['topicId'];
        this.topicTitle = data['topicTitle'];
        this.topicQuestion = data['topicQuestion'];
      });

    this.diagramType = -1; // not selected
  }

  getDiagramTypeSelected(): boolean {
    return this.diagramType > 0;
  }

}
