import { Component, OnInit, ViewChild } from '@angular/core';
import { AnswerFeedbackComponent } from '../answer-feedback/answer-feedback.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DiagramService } from '../diagram.service';

@Component({
  selector: 'app-answer-submission',
  templateUrl: './answer-submission.component.html',
  styleUrls: ['./answer-submission.component.css']
})
export class AnswerSubmissionComponent implements OnInit {
  public answer = '';

  constructor(
    public dialog: MatDialog,
  private _router: Router,
private _diagram: DiagramService) { }

  ngOnInit() {
  }

  showAnswerFeedback() {
    this._router.navigate(['dashboard']);
    this._diagram.answerSubmitted(20);
    const dialogRef = this.dialog.open(AnswerFeedbackComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
