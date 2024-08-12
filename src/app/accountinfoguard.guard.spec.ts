import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accountinfoguardGuard } from './accountinfoguard.guard';

describe('accountinfoguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accountinfoguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
