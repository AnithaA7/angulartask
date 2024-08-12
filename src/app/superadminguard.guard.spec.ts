import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { superadminguardGuard } from './superadminguard.guard';

describe('superadminguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => superadminguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
