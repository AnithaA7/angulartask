import { Injectable } from '@angular/core';
import { CanDeactivate , ActivatedRouteSnapshot,RouterStateSnapshot, CanDeactivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditComponent } from './edit/edit.component';


@Injectable({
  providedIn: 'root'
})

export class UnsavedGuard implements CanDeactivate<EditComponent>{
  canDeactivate(component: EditComponent): boolean  {
    if(component.isDirty){
      return window.confirm('Are you leave the page')
    }
    return true;
  }
 
}