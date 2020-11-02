import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

import { ConsultantComponent } from './consultant.component';

describe('ConsultantComponent', () => {
  let component: ConsultantComponent;
  let fixture: ComponentFixture<ConsultantComponent>;
  let customerService: CustomerService;
  let location: Location;
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantComponent ],
      imports:[ReactiveFormsModule,HttpClientModule, ToastrModule.forRoot({
        preventDuplicates: true
      }), RouterTestingModule],
      providers:[CustomerService, Location]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantComponent);
    component = fixture.componentInstance;
    customerService = TestBed.get(CustomerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create dynamic form controls ngOnChange()',()=>{
    //arrange
    component.master4Controls = [
        { entityName:'Salutation', module:'Consultant' },
        {entityName:'Ta', module:'Consultant'}
    ]

    //act 
    component.ngOnChanges();

    //assert
    expect(component.master4Form.get('Salutation')).toBeTruthy();
    expect(component.master4Form.get('Ta')).toBeTruthy();
  })

  it('should call customer service on clicking submit button',()=>{
    //arrange
    const customerSpy = spyOn(customerService,'postCustomer').and.callThrough();    
    const mycomponentSpy = spyOn(component,'onSubmit').and.callThrough();
    
    //act
    fixture.debugElement.query(By.css('#submitBtn'))
    .triggerEventHandler('click',null);
    fixture.detectChanges();

    //assert
    fixture.whenStable().then(() => {
        expect(mycomponentSpy).not.toHaveBeenCalled();
        expect(customerSpy).not.toHaveBeenCalled();
      });
  })

});
