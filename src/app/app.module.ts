import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectpipePipe } from './selectpipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppleComponent } from './apple/apple.component';
import { ChildappleComponent } from './childapple/childapple.component';
import { SouthafricaComponent } from './southafrica/southafrica.component';
import { LifehooktwoComponent } from './lifehooktwo/lifehooktwo.component';
import { LifehookthreeComponent } from './lifehookthree/lifehookthree.component';
import { LifethreeComponent } from './lifethree/lifethree.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentlifecyclehookComponent } from './parentlifecyclehook/parentlifecyclehook.component';
import { ChildlifecyclehooksComponent } from './childlifecyclehooks/childlifecyclehooks.component';
import { FifthlifecyclehookComponent } from './fifthlifecyclehook/fifthlifecyclehook.component';
import { LifecyclehooksixComponent } from './lifecyclehooksix/lifecyclehooksix.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ValidationformComponent } from './validationform/validationform.component';
import { RdformComponent } from './rdform/rdform.component';
import { FormsbComponent } from './formsb/formsb.component';
import { MathsService } from './maths.service';
import { LeftComponent } from './left/left.component';
// import { RightComponent } from './right/right.component';
import { ProductService } from './product.service';
import { TdformComponent } from './tdform/tdform.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';
import { GetdataComponent } from './getdata/getdata.component';
import { PersonService } from './person.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { OrganizationComponent } from './organization/organization.component';
import { CustomerComponent } from './customer/customer.component';
import { NodataComponent } from './nodata/nodata.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { LeadsgridComponent } from './leadsgrid/leadsgrid.component';
import { AdminComponent } from './admin/admin.component';
import { ManageComponent } from './manage/manage.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';


import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SelectpipePipe,
    ParentComponent,
    ChildComponent,
    AppleComponent,
    ChildappleComponent,
    SouthafricaComponent,
    LifehooktwoComponent,
    LifehookthreeComponent,
    LifethreeComponent,
    LifecyclehooksComponent,
    ParentlifecyclehookComponent,
    ChildlifecyclehooksComponent,
    FifthlifecyclehookComponent,
    LifecyclehooksixComponent,
    TemplateformComponent,
    ReactiveformComponent,
    ValidationformComponent,
    RdformComponent,
    FormsbComponent,
    LeftComponent,
    TdformComponent,
    // RightComponent,
    PersonComponent,
    GetdataComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    OrganizationComponent,
    CustomerComponent,
    NodataComponent,
    SearchComponent,
    LoginComponent,
    LeadsgridComponent,
    AdminComponent,
    ManageComponent,
    EditComponent,
    DeleteComponent,
    MaterialComponent,
   

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatIconModule,
    MatButtonModule,MatToolbarModule,MatCardModule, MatButtonModule
  ],
  providers: [MathsService,ProductService,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
