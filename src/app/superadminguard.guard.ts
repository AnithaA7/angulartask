import { Injectable} from "@angular/core";
import { CanActivateChild, ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree, CanActivateChildFn } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class superadminguardGuard implements CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return true;
  }
}
