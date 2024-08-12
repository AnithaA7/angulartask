import { Injectable } from "@angular/core";
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree, CanActivateChildFn} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class adminGuardGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return false;
  }
 
}
