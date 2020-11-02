import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})

// handles consultant realted functionalities
export class ConsultantComponent implements OnChanges, OnDestroy {

  //#region variables

  @Input() master4Controls: any[];                    // gets controls from parent 
  master4Form: FormGroup;                             // formGroup object
  subscription: Subscription;                         // subscription for form submition
  @Input() currentCustomerDetails:any            // holds current customer data if any
  editMode: boolean = false;                          //true if form is in edit mode

  //#endregion variables
  
  constructor(
    private formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.master4Form = this.formBuilder.group({});
  }

  //#region methods

  // initializes the form after getting input
  async ngOnChanges() {
    this.master4Controls.forEach(control => {
      if (control.module === 'Consultant')
        this.master4Form.addControl(control.entityName, new FormControl(''));
    });
     console.log(this.currentCustomerDetails);
     console.log(this.editMode);
    //  debugger;
    if(this.currentCustomerDetails !== undefined){
      this.editMode = true;
      this.initializeFormValues();
      }
      else
        this.editMode = false;
    }
  
    //initialize form values
    initializeFormValues(){
      var data='';
      this.master4Controls.forEach(control => {
          Object.keys(this.currentCustomerDetails).forEach(key=>{
            if(key.toLocaleLowerCase() === control.entityName.toLocaleLowerCase()){
              data  = this.currentCustomerDetails[key]
              return;
            }
          }) 
          if (control.module === 'Consultant'){      
            this.master4Form.patchValue({               // initializes form values 
              [control.entityName] : data
            })
          }
      });
      
    }

  // handles submit
  async onSubmit() {
      this.subscription = this._customerService
        .postCustomer(this.master4Form.value)
        .subscribe(
          (res: Response) => {
            this.toastr.success(
              'Your Customer data has been saved!',
              'Sucessful'
            );
            localStorage.removeItem('customerData');
            this.router.navigateByUrl('/');
            }
        ); 
    }

  // handles unsubscribe
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  //#endregion methods
}
