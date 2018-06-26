import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBaseComponent } from './topic-base.component';

describe('TopicBaseComponent', () => {
  let component: TopicBaseComponent;
  let fixture: ComponentFixture<TopicBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
