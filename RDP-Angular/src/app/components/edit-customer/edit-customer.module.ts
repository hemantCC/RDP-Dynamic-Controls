import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCustomerRoutingModule } from './edit-customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditCustomerComponent } from './edit-customer.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [EditCustomerComponent],
  imports: [
    CommonModule,
    EditCustomerRoutingModule,
    SharedModule,
  ]
})
export class EditCustomerModule { }
