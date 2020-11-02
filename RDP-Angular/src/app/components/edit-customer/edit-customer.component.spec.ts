import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ControlService } from 'src/app/services/control.service';
import { CustomerService } from 'src/app/services/customer.service';


import { EditCustomerComponent } from './edit-customer.component';

describe('EditCustomerComponent', () => {
  let component: EditCustomerComponent;
  let fixture: ComponentFixture<EditCustomerComponent>;
  let controlService: ControlService;
  let helper: Helper;
  let customerService: CustomerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomerComponent ],
      imports:[HttpClientModule,
        RouterTestingModule],
      providers:[
      {
        provide:ControlService,
        useValue:{ getControls: () => of(helper.getControls(1)) }
      },
      {
        provide:CustomerService,
        useValue:{ getCustomerById: () => of(helper.getCustomerDetails()) }
      }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerComponent);
    component = fixture.componentInstance;
    controlService = TestBed.get(ControlService);
    customerService = TestBed.get(CustomerService);
    helper = new Helper();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('populateControls should return controls',()=>{
    //arrange
    spyOn(controlService,'getControls').and.callThrough();
    
    //act
    component.ngOnInit();
    fixture.detectChanges();

    //assert
    expect(component.controls).toEqual(helper.getControls(1));
  })

  it('should get customer Details on getCustomerData()',()=>{
    //arrange 
    spyOn(customerService,'getCustomerById').withArgs(1)
    .and.returnValues(helper.getCustomerDetails())
    .and.callThrough();

    //act
    component.getCustomerData();

    //assert
    expect(component.customerDetails).toEqual(helper.getCustomerDetails());
  })


});


//helps with getting dummy data
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
              module:'Master1',
              dropdownValues:['value1','value2'],
              isRequired:true
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
