import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionIntroComponent } from './question-intro.component';

describe('QuestionIntroComponent', () => {
  let component: QuestionIntroComponent;
  let fixture: ComponentFixture<QuestionIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
