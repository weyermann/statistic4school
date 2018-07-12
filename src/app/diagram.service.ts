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
  private chatAnswerSubmittedSource = new Subject<boolean>();
  private chatFormOpenedSource = new Subject<boolean>();

  // Observable string streams
  diagramSelectionChanged$ = this.diagramSelectionChangedSource.asObservable();
  datasetSelectionChanged$ = this.datasetSelectionChangedSource.asObservable();
  anwerSubmittedChanged$ = this.answerSubmittedSource.asObservable();
  chatSubmittedChanged$ = this.chatAnswerSubmittedSource.asObservable();
  chatOpenedChanged$ = this.chatFormOpenedSource.asObservable();

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

  chatSubmitted() {
    this.answerSubmittedSource.next(5);
    this.chatAnswerSubmittedSource.next(true);
  }

  chatOpened() {
    this.chatFormOpenedSource.next(true);
  }
}
