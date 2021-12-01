import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrokerService } from 'src/app/broker/broker.service';
import { CustomerModel } from 'src/app/model/customer.model';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'app-display-add-customer',
  templateUrl: './display-add-customer.component.html',
  styleUrls: ['./display-add-customer.component.scss']
})
export class DisplayAddCustomerComponent implements OnInit, OnDestroy {

  destroy$: Subject<void> = new Subject();
  customerList: CustomerModel[] = [...this.broker.customerList];

  constructor(public broker: BrokerService) { 
    this.broker.filterOn('keyword').pipe(takeUntil(this.destroy$)).subscribe(d => {
      this.filterCustomerList(d.data);
    });
  }

  ngOnInit(): void {
  }

  filterCustomerList(keyword: string): void {
    this.customerList = [...this.broker.customerList.filter( customer => 
      customer.name.toLowerCase().includes(keyword)
    )]; 
  }

  addCustomer(): void {
    // Currently adding a static data by modifying the id based on array length
    const newId = this.broker.customerList.length + 1;
    const customerObj = {
      id: newId,
      name: 'Infinite Flame',
      owner: 'John Snow',
      address: '123 Main St, Philadelphia, PA, 19147',
      email: 'johnsnow@gmail.com',
      color: 'blue',
      icon: 'assets/icon.png'
    }
    // This line represents the API call to save data
    this.broker.customerList.push(customerObj);

    // This line represents the API call to get updated data after save
    this.customerList = [...this.broker.customerList];
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
