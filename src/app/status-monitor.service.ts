import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusMonitorService {

  private Status: number;

  constructor() {
    this.Status = 1;
  }

  getStatusIsDiagramTypeSelection() {
    return this.Status === 1;
  }

  getStatusIsAxisDataSelection() {
    return this.Status === 2;
  }

  getStatusIsAxisScalingSelection() {
    return this.Status === 3;
  }

  getStatusIsAnswerSubmission() {
    return this.Status === 4;
  }

  setStatusIsDiagramTypeSelection() {
    this.Status = 1;
  }

  setStatusIsAxisDataSelection() {
    this.Status = 2;
  }

  setStatusIsAxisScalingSelection() {
    this.Status = 3;
  }

  setStatusIsAnswerSubmission() {
    this.Status = 4;
  }


  setStatusPrevious() {
    this.Status -= 1;
  }

  setStatusNext() {
    this.Status += 1;
  }
}
