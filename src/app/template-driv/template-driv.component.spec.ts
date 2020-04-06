import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivComponent } from './template-driv.component';

describe('TemplateDrivComponent', () => {
  let component: TemplateDrivComponent;
  let fixture: ComponentFixture<TemplateDrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
