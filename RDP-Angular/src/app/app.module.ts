import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker/';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { SpinnerInterceptor } from './interceptor/spinner.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { Master2Component } from './components/shared/master2/master2.component';
import { Master1Component } from './components/shared/master1/master1.component';
import { FaInformationComponent } from './components/shared/fa-information/fa-information.component';
import { ConsultantComponent } from './components/shared/consultant/consultant.component';
import { MaterialModule } from './components/shared/material.module';
import { AddCustomerModule } from './components/add-customer/add-customer.module';
import { SharedModule } from './components/shared/shared.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { EditCustomerModule } from './components/edit-customer/edit-customer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    MaterialModule,
    AddCustomerModule,
    SharedModule,
    DashboardModule,
    EditCustomerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
