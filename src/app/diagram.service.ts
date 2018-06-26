import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  constructor() { }

  // Observable string sources
  private diagramSelectionChangedSource = new Subject<string>();

  // Observable string streams
  diagramSelectionChanged$ = this.diagramSelectionChangedSource.asObservable();

  // Service message commands
  changeDiagramSelection(type: string) {
    this.diagramSelectionChangedSource.next(type);
  }
}
