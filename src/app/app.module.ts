import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DisplayAddCustomerComponent } from './components/display-add-customer/display-add-customer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { BrokerService } from './broker/broker.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayAddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,
    
    // Material
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [BrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
