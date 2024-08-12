import { CanActivateFn } from '@angular/router';

export const adminaccessGuard: CanActivateFn = (route, state) => {
  return true;
};
