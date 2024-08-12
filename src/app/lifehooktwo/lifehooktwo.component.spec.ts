import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifehooktwoComponent } from './lifehooktwo.component';

describe('LifehooktwoComponent', () => {
  let component: LifehooktwoComponent;
  let fixture: ComponentFixture<LifehooktwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifehooktwoComponent]
    });
    fixture = TestBed.createComponent(LifehooktwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
