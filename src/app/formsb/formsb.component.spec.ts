import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsbComponent } from './formsb.component';

describe('FormsbComponent', () => {
  let component: FormsbComponent;
  let fixture: ComponentFixture<FormsbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsbComponent]
    });
    fixture = TestBed.createComponent(FormsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
