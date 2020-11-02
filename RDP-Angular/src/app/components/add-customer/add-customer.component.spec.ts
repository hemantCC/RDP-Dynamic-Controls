import { createComponent } from '@angular/compiler/src/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { ControlService } from 'src/app/services/control.service';
import { MaterialModule } from '../shared/material.module';
import { AddCustomerComponent } from './add-customer.component';

describe('AddCustomerComponent', () => {
  let component: AddCustomerComponent;
  let fixture: ComponentFixture<AddCustomerComponent>;
  let controlService: ControlService;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerComponent ],
      providers:[{
          provide:ControlService, useValue:{ getControls: () => of([{
           name: 'salutation',
            entityName: 'Salutation' ,
            isRequired:true,
            controlType:2,Module:1,
            dropdownValues:['value1','value2']}]) }
        }],
        imports:[MatStepperModule,BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerComponent);
    component = fixture.componentInstance;
    controlService = TestBed.get(ControlService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('populateControls should be called',()=>{
    spyOn(controlService,'getControls').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(controlService.getControls).toHaveBeenCalled();
  })

  it('populateControls should return controls',()=>{
    //arrange
    spyOn(controlService,'getControls').and.callThrough();
    
    //act
    component.ngOnInit();
    fixture.detectChanges();

    //assert
    expect(component.controls).toEqual([{ name: 'salutation',
    entityName: 'Salutation' ,
    isRequired:true,
    controlType:2,Module:1,
    dropdownValues:['value1','value2']}]);
  })

  describe('Stepper tests',()=>{

    it('should default to the first step', () => {
      expect(component.stepper.selectedIndex).toBe(0);
    });
  
    it('should set to next step on goForward() ', () => {
      component.goForward();
      expect(component.stepper.selectedIndex).toBe(1);
    });
  
    it('should set to previous step on goForward() ', () => {
      component.stepper.selectedIndex = 1
      component.goBack();
      expect(component.stepper.selectedIndex).toBe(0);
    });
  })

})
