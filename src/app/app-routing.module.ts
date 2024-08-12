import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { OrganizationComponent } from './organization/organization.component';
import { CustomerComponent } from './customer/customer.component';
import { NodataComponent } from './nodata/nodata.component';
import { LeadsgridComponent } from './leadsgrid/leadsgrid.component';
import { AccountInfoGuardGuard } from './accountinfoguard.guard';
import { AdminComponent } from './admin/admin.component';
import { adminGuardGuard } from './admin-guard.guard';
import { superadminguardGuard } from './superadminguard.guard';
import { ManageComponent } from './manage/manage.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { UnsavedGuard } from './unsaved.guard';


const routes: Routes = [
  {path: 'home/:id', component: HomeComponent},
  {path:'user', component:UserComponent},
  {path:'search',component: SearchComponent},
  {path:'about',component:AboutComponent,
    children:[
      {component:OrganizationComponent,path:'organization'},
      {component:CustomerComponent,path:'customer'}
    ]
   }, 
   {component:NodataComponent,path:'nodata'},
   {path:'leads', component:LeadsgridComponent,
    resolve:{
      data:AccountInfoGuardGuard
    }
   },
   {path:'admin',component:AdminComponent,
    canActivate:[adminGuardGuard],
  canActivateChild:[superadminguardGuard],
children: [
  {path:'', component:AdminComponent},
  
  {path:'manage',component:ManageComponent},
  {path:'edit',component:EditComponent,canDeactivate:[UnsavedGuard]},
  {path:'delete',component:DeleteComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
