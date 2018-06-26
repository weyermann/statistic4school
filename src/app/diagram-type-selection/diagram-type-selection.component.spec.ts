import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramTypeSelectionComponent } from './diagram-type-selection.component';

describe('DiagramTypeSelectionComponent', () => {
  let component: DiagramTypeSelectionComponent;
  let fixture: ComponentFixture<DiagramTypeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramTypeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
