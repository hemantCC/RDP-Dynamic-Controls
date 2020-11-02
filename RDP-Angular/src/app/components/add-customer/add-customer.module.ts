import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from 'src/app/interceptor/spinner.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddCustomerRoutingModule } from './add-customer-routing.module';



@NgModule({
  declarations: [AddCustomerComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    AddCustomerRoutingModule
  ],providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
})
export class AddCustomerModule { }
