import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildappleComponent } from './childapple.component';

describe('ChildappleComponent', () => {
  let component: ChildappleComponent;
  let fixture: ComponentFixture<ChildappleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildappleComponent]
    });
    fixture = TestBed.createComponent(ChildappleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
