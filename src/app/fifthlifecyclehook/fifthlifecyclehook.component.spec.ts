import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthlifecyclehookComponent } from './fifthlifecyclehook.component';

describe('FifthlifecyclehookComponent', () => {
  let component: FifthlifecyclehookComponent;
  let fixture: ComponentFixture<FifthlifecyclehookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifthlifecyclehookComponent]
    });
    fixture = TestBed.createComponent(FifthlifecyclehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
