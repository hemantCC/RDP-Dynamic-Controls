import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Subscription } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

// add customer parent component 
export class AddCustomerComponent implements OnInit, OnDestroy {

  controls: any = [];  //contains all controls
  subscription: Subscription;  //subscription for get controls
  @ViewChild('stepper') stepper: MatStepper;

  constructor(private _controlService: ControlService) {}

  ngOnInit(): void {
    this.populateControls();
  }

  // gets the controls and populates it 
  populateControls() {
    this.subscription = this._controlService
      .getControls()
      .subscribe((controls: any[]) => {
        console.log(controls);
        this.controls = controls;
      });
  }

  // go back in stepper
  goBack() {
    this.stepper.previous();
  }

  // go forward in steper
  goForward() { 
    this.stepper.next();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  //unsubscribe getting the controls 
  }
}
