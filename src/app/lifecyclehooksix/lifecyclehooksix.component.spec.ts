import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclehooksixComponent } from './lifecyclehooksix.component';

describe('LifecyclehooksixComponent', () => {
  let component: LifecyclehooksixComponent;
  let fixture: ComponentFixture<LifecyclehooksixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecyclehooksixComponent]
    });
    fixture = TestBed.createComponent(LifecyclehooksixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
