import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCustomerComponent } from './edit-customer.component';

const routes: Routes = [{
  path:'',
  component:EditCustomerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCustomerRoutingModule { }
