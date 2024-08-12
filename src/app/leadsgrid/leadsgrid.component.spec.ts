import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsgridComponent } from './leadsgrid.component';

describe('LeadsgridComponent', () => {
  let component: LeadsgridComponent;
  let fixture: ComponentFixture<LeadsgridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsgridComponent]
    });
    fixture = TestBed.createComponent(LeadsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
