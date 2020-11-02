import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-fa-information',
  templateUrl: './fa-information.component.html',
  styleUrls: ['./fa-information.component.css']
})

// handles FA Information realted functionalities
export class FaInformationComponent implements OnChanges {

  //#region variables
  
  @Input() master3Controls: any[];      // controls as inputs from parent component
  master3Form: FormGroup;               // Form Group object
  @Input() currentCustomerDetails:any = {}            // holds current customer data if any
  
  //#endregion variables

  constructor(
    private formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private toastr: ToastrService
  ) {
    this.master3Form = this.formBuilder.group({});
  }

  //#region methods

  // creates dynamic form based on controls
  ngOnChanges() {
    this.master3Controls.forEach(control => {
      if (control.module === 'FAInformation') {
        this.master3Form.addControl(control.entityName, new FormControl(''));
      }
    });
    if(this.currentCustomerDetails !== undefined){
      this.initializeFormValues();
      } 
    }
  
    //initialize form values
    initializeFormValues(){
      var data='';
      this.master3Controls.forEach(control => {
          Object.keys(this.currentCustomerDetails).forEach(key=>{
            if(key.toLocaleLowerCase() === control.entityName.toLocaleLowerCase()){
              data  = this.currentCustomerDetails[key]
              return;
            }
          }) 
          if (control.module === 'FAInformation'){      
            this.master3Form.patchValue({               // initializes form values 
              [control.entityName] : data
            })
          }
      });
    }


  // handles  form submition 
  onSubmit() {
    this._customerService.saveCustomerData(this.master3Form.value);
    this.toastr.success('Your Customer data has been saved!', 'Sucessful');
  }

  //#endregion methods

}
