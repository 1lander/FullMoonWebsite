import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsubmitComponent } from './forumsubmit.component';

describe('ForumsubmitComponent', () => {
  let component: ForumsubmitComponent;
  let fixture: ComponentFixture<ForumsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
