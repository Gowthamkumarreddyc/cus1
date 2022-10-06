import { LoginGuard } from './login.guard';
import { EidtcustomerComponent } from './eidtcustomer/eidtcustomer.component';
import { CustomerorderComponent } from './customerorder/customerorder.component';
import { ListComponent } from './list/list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:'login', component:LoginComponent , canActivate : [LoginGuard]},
  {path:"customer",component:CustomersComponent},
  {path:"list",component:ListComponent },
  {path:"add",component:AddcustomerComponent},
  {path:"edit/:uid",component:EidtcustomerComponent},
  {path:"order",component:CustomerorderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
