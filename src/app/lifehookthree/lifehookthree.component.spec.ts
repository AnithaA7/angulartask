import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifehookthreeComponent } from './lifehookthree.component';

describe('LifehookthreeComponent', () => {
  let component: LifehookthreeComponent;
  let fixture: ComponentFixture<LifehookthreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifehookthreeComponent]
    });
    fixture = TestBed.createComponent(LifehookthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
