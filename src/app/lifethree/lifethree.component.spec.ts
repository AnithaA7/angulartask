import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifethreeComponent } from './lifethree.component';

describe('LifethreeComponent', () => {
  let component: LifethreeComponent;
  let fixture: ComponentFixture<LifethreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifethreeComponent]
    });
    fixture = TestBed.createComponent(LifethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
