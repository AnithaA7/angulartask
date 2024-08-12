import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthafricaComponent } from './southafrica.component';

describe('SouthafricaComponent', () => {
  let component: SouthafricaComponent;
  let fixture: ComponentFixture<SouthafricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouthafricaComponent]
    });
    fixture = TestBed.createComponent(SouthafricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
