import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumpostlistComponent } from './forumpostlist.component';

describe('ForumpostlistComponent', () => {
  let component: ForumpostlistComponent;
  let fixture: ComponentFixture<ForumpostlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumpostlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumpostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
