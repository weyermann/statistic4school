import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  constructor() { }

  // Observable string sources
  private diagramSelectionChangedSource = new Subject<string>();
  private datasetSelectionChangedSource = new Subject<string>();
  private answerSubmittedSource = new Subject<number>();

  // Observable string streams
  diagramSelectionChanged$ = this.diagramSelectionChangedSource.asObservable();
  datasetSelectionChanged$ = this.datasetSelectionChangedSource.asObservable();
  anwerSubmittedChanged$ = this.answerSubmittedSource.asObservable();

  // Service message commands
  changeDiagramSelection(type: string) {
    this.diagramSelectionChangedSource.next(type);
  }

  changeDatasetSelection(type: string) {
    this.datasetSelectionChangedSource.next(type);
  }

  answerSubmitted(addScore: number) {
    this.answerSubmittedSource.next(addScore);
  }
}
