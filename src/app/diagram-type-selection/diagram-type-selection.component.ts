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
  public datasetChanged: Subject<string> = new Subject<string>();

  public diagramTypes;
  public datasets;
  public selectedDiagramType;
  public selectedDataset;

  constructor(
    private _diagram: DiagramService,
    private _monitor: StatusMonitorService
  ) {
    this.diagramTypes = [
      { value: 'bar', viewValue: 'Balkendiagramm' },
      { value: 'pie', viewValue: 'Tortendiagramm' },
      { value: 'bubble', viewValue: 'Bubble Diagramm' },
      { value: 'map', viewValue: 'Karte' },
      { value: 'spider', viewValue: 'Netzdiagramm' },
    ];

    this.datasets = [
      { value: 'zh_pop_2017_per_quarter', viewValue: 'Bevölkerung Zürich 2017 pro Wohnquartier' },
      { value: 'zh_pop_1970_2017_per_quarter', viewValue: 'Bevölkerung Zürich 1970 bis 2017 pro Wohnquartier' },
      { value: 'zh_pop_by_origin', viewValue: 'Bevölkerung Zürich nach Geburtsort und Geburtsland' }
    ];
  }

  ngOnInit() {
    this.selectedDiagramType = '';
    this.selectedDataset = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('some changes');
    if (changes['selectedDiagramType']) {
      this._monitor.setStatusIsAxisDataSelection();
      this._diagram.changeDiagramSelection(this.selectedDiagramType);
      this._diagram.changeDatasetSelection(this.selectedDataset);
    }
  }

  changeDiagramType() {
    this._monitor.setStatusIsAxisDataSelection();
    this._diagram.changeDiagramSelection(this.selectedDiagramType);
  }

  changeDataset() {
    this._monitor.setStatusIsAxisDataSelection();
    this._diagram.changeDatasetSelection(this.selectedDataset);
  }

}
