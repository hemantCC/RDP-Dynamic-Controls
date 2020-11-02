import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';

const routes: Routes = [
  // lazy loading for dashboard module
  {
    path: '',
    loadChildren: ()=> import('./components/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
  },
  // lazy loading for add module
  {
    path: 'add',
    loadChildren: ()=> import('./components/add-customer/add-customer.module').then(m => m.AddCustomerModule)
  },
  {
    path: 'edit/:id',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
