import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAssignmentComponent } from './reactive-assignment.component';

describe('ReactiveAssignmentComponent', () => {
  let component: ReactiveAssignmentComponent;
  let fixture: ComponentFixture<ReactiveAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
