import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsubmitComponent } from './threadsubmit.component';

describe('ThreadsubmitComponent', () => {
  let component: ThreadsubmitComponent;
  let fixture: ComponentFixture<ThreadsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
