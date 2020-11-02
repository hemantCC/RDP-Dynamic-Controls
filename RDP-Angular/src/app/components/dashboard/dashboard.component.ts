import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// dashboard related tasks 
export class DashboardComponent implements OnInit, OnDestroy {

  public dataSource: any;                 // stores all the customer data 
  displayedColumns: string[] = [
    'customerNumber',
    'name',
    'vat',
    'lastVisit',
    'salesConsultant',
    'matchCode',
    'type',
    'editButton'
  ];                                      // columns to be displayed in table
  subscription: Subscription;             // subscription for getting customer details
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  // gets all customers 
  async getCustomers() {
    this.subscription = this._customerService
      .getCustomers()
      .subscribe((customers: any[]) => {
        this.dataSource = new MatTableDataSource<any[]>(customers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(customers);
      });
  }

  // filters the data upon search
  filterDataSource(filterString: string) {
    this.dataSource.filter = filterString.trim().toLocaleLowerCase();
  } 

  ngOnDestroy() {
    this.subscription.unsubscribe(); // unsubscribes getting the customer
  }
}
