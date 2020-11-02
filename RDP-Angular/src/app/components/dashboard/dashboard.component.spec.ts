import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {

  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let customerService: CustomerService;
  let helper: Helper;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[HttpClientModule],
      providers:[CustomerService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    customerService = TestBed.get(CustomerService);
    helper = new Helper();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate datasource on getCustomer()',(done) => {
    //arrange
    let values: any;

    helper.getCustomers().subscribe((res) =>{
      values = new MatTableDataSource<any[]>(res)
      values.paginator = component.paginator;
      values.sort = component.sort;
    })
    spyOn(customerService,'getCustomers')
    .and.callThrough()
    .and.returnValue(helper.getCustomers());

    //act
    fixture.detectChanges();

    //assert
    fixture.whenStable().then(()=>{
      expect(component.dataSource).toEqual(values)
    })
    done();
  })

});

class Helper{
  getCustomers(){
    var customers : any[] = [
      { 
        Id: 1 ,
        Salutation:'Mr.', 
        DebtorNumber:123 
      }];
    
    return of(customers);
  }

}
