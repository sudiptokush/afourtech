import { Component } from '@angular/core';

import { BrokerService } from './broker/broker.service';
import { CustomerData } from './data/customer.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'afourtech';
  keyword: string = '';

  constructor(private readonly broker: BrokerService) {
    this.broker.customerList = [...CustomerData];
  }

  back(): void {
    alert("Back button clicked");
  }
}
