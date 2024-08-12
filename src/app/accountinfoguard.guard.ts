// import { CanActivate } from '@angular/router';

// export const AccountInfoGuardGuard: CanActivate = (route, state) => {
//   return true;
// };


import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountInfoGuardGuard implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

   
    const userObj = {
      userId: 10,
      username: 'anitha'
    };

 
    return of(userObj);
  }
}
