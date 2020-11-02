import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Master2Component } from './master2/master2.component';
import { FaInformationComponent } from './fa-information/fa-information.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { Master1Component } from './master1/master1.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from 'src/app/interceptor/spinner.interceptor';



@NgModule({
  declarations: [
    Master1Component,
    Master2Component,
    FaInformationComponent,
    ConsultantComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSpinnerModule
  ],exports:[
    Master2Component,
    Master1Component,
    FaInformationComponent,
    ConsultantComponent,
    NgxSpinnerModule,
    MaterialModule 
  ],providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
})
export class SharedModule { }
