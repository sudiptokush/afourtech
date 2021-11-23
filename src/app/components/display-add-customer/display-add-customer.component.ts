import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrokerService } from 'src/app/broker/broker.service';
import { CustomerModel } from 'src/app/model/customer.model';

@Component({
  selector: 'app-display-add-customer',
  templateUrl: './display-add-customer.component.html',
  styleUrls: ['./display-add-customer.component.scss']
})
export class DisplayAddCustomerComponent implements OnInit, OnDestroy {

  keywordSub: Subscription;
  customerList: CustomerModel[] = [...this.broker.customerList];

  constructor(public broker: BrokerService) { 
    this.keywordSub = this.broker.filterOn('keyword').subscribe(d => {
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
      icon: 'https://picsum.photos/50/50?random=' + newId
    }
    this.broker.customerList.push(customerObj);
    this.customerList = [...this.broker.customerList];
  }

  ngOnDestroy() {
    this.keywordSub.unsubscribe();
  }

}
