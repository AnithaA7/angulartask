import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentlifecyclehookComponent } from './parentlifecyclehook.component';

describe('ParentlifecyclehookComponent', () => {
  let component: ParentlifecyclehookComponent;
  let fixture: ComponentFixture<ParentlifecyclehookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentlifecyclehookComponent]
    });
    fixture = TestBed.createComponent(ParentlifecyclehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
