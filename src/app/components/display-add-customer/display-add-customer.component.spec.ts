import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAddCustomerComponent } from './display-add-customer.component';

describe('DisplayAddCustomerComponent', () => {
  let component: DisplayAddCustomerComponent;
  let fixture: ComponentFixture<DisplayAddCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAddCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
