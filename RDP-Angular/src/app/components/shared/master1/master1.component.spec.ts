import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {  FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';
import { AddCustomerComponent } from '../../add-customer/add-customer.component';
import { EditCustomerComponent } from '../../edit-customer/edit-customer.component';

import { Master1Component } from './master1.component';

describe('Master1Component', () => {
  let component: Master1Component;
  let editComponent: EditCustomerComponent;
  let fixture: ComponentFixture<Master1Component>;
  let editFixture: ComponentFixture<EditCustomerComponent>;
  let toastrService: ToastrService;
  let customerService: CustomerService;
  let helper: Helper;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Master1Component, EditCustomerComponent ],
      imports:[ReactiveFormsModule, ToastrModule.forRoot({
        preventDuplicates: true
      }),HttpClientModule,RouterTestingModule],
      providers:[CustomerService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Master1Component);
    editFixture = TestBed.createComponent(EditCustomerComponent);
    component = fixture.componentInstance;
    editComponent = editFixture.componentInstance;
    toastrService = TestBed.get(ToastrService);
    customerService = TestBed.get(CustomerService);
    helper = new Helper();
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should create dynamic form controls ngOnChange()',() => {
    //arrange
    component.master1Controls = helper.getControls(2);

    //act
    component.ngOnChanges();

    //assert
    expect(component.master1Form.get('Salutation_0')).toBeTruthy();
    expect(component.master1Form.get('Salutation_1')).toBeTruthy();
  })


  it('should call customer service on clicking submit button',()=>{
    //arrange
    const compiled = fixture.debugElement.nativeElement;  
    spyOn(customerService,'saveCustomerData').and.callThrough();    
    spyOn(component,'onSubmit').and.callThrough();
    
    //act
    fixture.debugElement.query(By.css('#submitBtn'))
    .triggerEventHandler('click',null);
    fixture.detectChanges();

    //assert
    fixture.whenStable().then(() => { 
        expect(component.onSubmit).toHaveBeenCalled();
        expect(customerService.saveCustomerData).toHaveBeenCalled();
      });
  })


  it('should initialize form when currentCustomer data is defined', fakeAsync(()=>{
    //arrange
    component.currentCustomerDetails = helper.getCustomerDetails();
    component.master1Controls = helper.getControls(1);
    component.master1Form.addControl('Salutation_0',new FormControl(''))

    //act
    component.initializeFormValues();
    fixture.detectChanges();
    tick();

    //assert
    fixture.whenStable().then(() =>{
      expect(component.master1Form.get('Salutation_0').value).toEqual('Sal_Value');
    });
  }))

  it('should call customer service when submit is called',() => {
    //arange
    const customerSpy = spyOn(customerService,'saveCustomerData').and.callThrough(); 

    //act
    component.onSubmit();

    //assert
    expect(customerSpy).toHaveBeenCalledTimes(1);
  })


});

class Helper {

  //returns the desired number of controls
  getControls(count: number): any{
    let controls = [];
    for(var i=0 ; i< count;i++){
      controls.push(
        {
            id: i ,
            entityName:'Salutation_'+ i,
            type:'Dropdown',
            module:'Master1'
          }
        )
    }
    return controls;
  }

  //returns customerDetails
  getCustomerDetails():any{
    const customer = { 'Salutation_0':'Sal_Value' };
    return customer;
  }
}
