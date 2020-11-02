import { Component, OnInit, OnDestroy } from '@angular/core';

import { ControlService } from 'src/app/services/control.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit, OnDestroy {


  controls: any = [];                     // stores all the controls 
  subscription: Subscription;             // holds the subscription for getting controls
  routeSubscription: Subscription;        // holds the subscription for router
  customerId: number;                     // stores the current id for edit
  customerDetails:any ={};                    // information regarding selected customer
  customerSubscription:Subscription;
  constructor(
    private _controlService: ControlService,
    private route: ActivatedRoute,
    private _customerService: CustomerService
  ) {} 

  ngOnInit(): void {
    this.populateControls();
    this.getCustomerData();
  }

  // populates controls
  populateControls() {
    this.subscription = this._controlService
      .getControls()
      .subscribe((controls: any[]) => {
        this.controls = controls;
      });
  }


  // gets selected customer data
  getCustomerData() {
    this.routeSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);
      this.customerId = params['id'];
    });
    this.customerSubscription = this._customerService.getCustomerById(this.customerId).subscribe(
      (res:any) => {  
        this.customerDetails = res;
      });
  }

  // handles all unsubscriptions
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routeSubscription.unsubscribe();
    this.customerSubscription.unsubscribe();
  }
}
