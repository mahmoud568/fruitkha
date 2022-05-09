import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/shared/Interface/customer.model';
import { fruit } from 'src/app/shared/Interface/fruit.model';

import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseURL: string = "";
  constructor(
    private http: HttpClient,
    private sharedService: SharedService
    ) {
    this.baseURL = this.sharedService.getBaseUrl();
  }

  placeOrder(cart: { fruit: fruit; quantity: number }[], customer: Customer, discount: number) {
    return this.http.post(`${this.baseURL}placeOrder`, {
      customer: JSON.stringify(customer),
      cart: JSON.stringify(cart),
      discount: JSON.stringify(discount)
    });
  }
}
