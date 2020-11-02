import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ControlContainer } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-master1',
  templateUrl: './master1.component.html',
  styleUrls: ['./master1.component.css']
})

// handles master 1 realted functionalities
export class Master1Component implements OnChanges {

  //#region variables

  @Input() master1Controls: any[];                    //holds controls for master 1
  master1Form: FormGroup;                             //master 1 from Group
  subscription: Subscription;                         //holds subscription for getting control
  @Input() currentCustomerDetails:any                 // holds current customer data if any

  //#endregion variables  

  constructor(
    private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private _customerService: CustomerService
  ) {
    this.master1Form = this.formBuilder.group({});
  }

  //#region methods

  // creates form based on dynamic controls
  ngOnChanges() {
    this.master1Controls.forEach(control => {
        if (control.module === 'Master1'){
          this.master1Form.addControl(control.entityName, new FormControl(''));
        }
    }); 
    
    if(this.currentCustomerDetails !== undefined){
      this.initializeFormValues();
      console.log(this.currentCustomerDetails);
      // localStorage.clear
      localStorage.setItem('customerData',JSON.stringify(this.currentCustomerDetails))
    } 
  }

  //initialize form values
  initializeFormValues(){
    var data='';
    this.master1Controls.forEach(control => {
        Object.keys(this.currentCustomerDetails).forEach(key=>{
          if(key.toLocaleLowerCase() === control.entityName.toLocaleLowerCase()){
            data  = this.currentCustomerDetails[key]
            return;
          }
        }) 
        if (control.module === 'Master1'){      
          this.master1Form.patchValue({               // initializes form values 
            [control.entityName] : data
          })
        }
    });
  }
  

  // handles form submition
  onSubmit() {
    this._customerService.saveCustomerData(this.master1Form.value);
    this.toastr.success('Your Customer data has been saved!', 'Sucessful');
  }

  //#endregion methods

}
