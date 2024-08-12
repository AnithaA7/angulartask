import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildlifecyclehooksComponent } from './childlifecyclehooks.component';

describe('ChildlifecyclehooksComponent', () => {
  let component: ChildlifecyclehooksComponent;
  let fixture: ComponentFixture<ChildlifecyclehooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildlifecyclehooksComponent]
    });
    fixture = TestBed.createComponent(ChildlifecyclehooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
