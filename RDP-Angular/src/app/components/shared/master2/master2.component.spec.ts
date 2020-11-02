import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

import { Master2Component } from './master2.component';

describe('Master2Component', () => {
  let component: Master2Component;
  let fixture: ComponentFixture<Master2Component>;
  let customerService: CustomerService;
  let toastrService: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Master2Component ],
      imports:[ReactiveFormsModule,
        HttpClientModule, 
        ToastrModule.forRoot({
        preventDuplicates: true
      })],
      providers:[CustomerService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Master2Component);
    component = fixture.componentInstance;
    customerService = TestBed.get(CustomerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create dynamic form controls ngOnChange()',()=>{
    //arrange
    component.master2Controls = [{ entityName:'Salutation', module:'Master2' },{entityName:'Ta', module:'Master2'}]

    //act
    component.ngOnChanges();

    //assert
    expect(component.master2Form.get('Salutation')).toBeTruthy();
    expect(component.master2Form.get('Ta')).toBeTruthy();
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

  it('should call customer service when submit is called',() => {
    //arange
    spyOn(customerService,'saveCustomerData').and.callThrough(); 

    //act
    component.onSubmit();

    //assert
    expect(customerService.saveCustomerData).toHaveBeenCalled();
  })

});
