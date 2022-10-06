import { LoginGuard } from './login.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import {CustomerlistService} from'./customerlist.service';
import { ListComponent } from './list/list.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EidtcustomerComponent } from './eidtcustomer/eidtcustomer.component';
import { CustomerorderComponent } from './customerorder/customerorder.component';
import { AllcustomerorderComponent } from './allcustomerorder/allcustomerorder.component';
import { FormsModule } from '@angular/forms';
import { FillterPipe } from './fillter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CustomersComponent,
    ListComponent,
    AddcustomerComponent,
    EidtcustomerComponent,
    CustomerorderComponent,
    AllcustomerorderComponent,
    FillterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerlistService , LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
