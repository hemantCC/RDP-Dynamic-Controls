import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  getCustomersUrl,
  postCustomerUrl,
  getCustomerByIdUrl
} from '../config/apiUrl';

@Injectable({
  providedIn: 'root'
})

// provides customer related services
export class CustomerService {

  customerData: any = {};

  constructor(private http: HttpClient) {}


  // gets the list of customers
  getCustomers() {
    return this.http.get(getCustomersUrl);
  }


  //returns customer with given id
  getCustomerById(id: number) {
    return this.http.get(getCustomerByIdUrl + id);
  }


  //saves customerData in localStorage temporarily
  saveCustomerData(data: any) {
    if (JSON.parse(localStorage.getItem('customerData')) == null)
      localStorage.setItem('customerData', JSON.stringify({}));

    this.customerData = JSON.parse(localStorage.getItem('customerData'));
    Object.assign(this.customerData, data);
    localStorage.setItem('customerData', JSON.stringify(this.customerData));
  }


  //saves the customer data into the backend
  postCustomer(data: any) {
    this.saveCustomerData(data);
    return this.http.post(
      postCustomerUrl,
      JSON.parse(localStorage.getItem('customerData'))
    );
  }
}
