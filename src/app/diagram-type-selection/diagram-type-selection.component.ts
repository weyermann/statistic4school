import { StatusMonitorService } from './../status-monitor.service';
import { DiagramService } from './../diagram.service';
import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-diagram-type-selection',
  templateUrl: './diagram-type-selection.component.html',
  styleUrls: ['./diagram-type-selection.component.css']
})
export class DiagramTypeSelectionComponent implements OnInit, OnChanges {

  public diagramTypeChanged: Subject<string> = new Subject<string>();

  public diagramTypes;
  public selectedDiagramType;

  constructor(
    private _diagram: DiagramService,
  private _monitor: StatusMonitorService) {
    this.diagramTypes = [
      {value: 'bar', viewValue: 'Balkendiagramm'},
      {value: 'pie', viewValue: 'Tortendiagramm'},
      {value: 'bubble', viewValue: 'Bubble Diagramm'},
      {value: 'map', viewValue: 'Karte'},
      {value: 'spider', viewValue: 'Netzdiagramm'},
    ];
   }

  ngOnInit() {
    this.selectedDiagramType = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('some changes');
    if (changes['selectedDiagramType']) {
      this._monitor.setStatusIsAxisDataSelection();
      this._diagram.changeDiagramSelection(this.selectedDiagramType);
    }
  }

  changeDiagramType() {
    this._monitor.setStatusIsAxisDataSelection();
    this._diagram.changeDiagramSelection(this.selectedDiagramType);
  }

}
