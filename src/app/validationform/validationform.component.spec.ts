import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationformComponent } from './validationform.component';

describe('ValidationformComponent', () => {
  let component: ValidationformComponent;
  let fixture: ComponentFixture<ValidationformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationformComponent]
    });
    fixture = TestBed.createComponent(ValidationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
