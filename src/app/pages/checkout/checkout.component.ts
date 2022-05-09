import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { fruit } from 'src/app/shared/Interface/fruit.model';
import { currencyexchange } from 'src/app/shared/Interface/option.model';
import { SharedService } from 'src/app/shared/services/shared.service';
import { HeaderService } from '../header/service/header.service';
import { CheckoutService } from './service/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart: { fruit: fruit; quantity: number }[] = [] ;
  currency!: string;
  exchangerate!: number;
  subscrition!: Subscription;

  Subtotal: number = 0;
  Shipping: number = 1;

  discount: number = 0;
  constructor(
    private sharedService: SharedService,
    private headerService: HeaderService,
    private checkoutService: CheckoutService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cart = this.sharedService.cart;
    this.resetSubtotal();
    this.discount = this.sharedService.discount;
    this.subscrition = this.headerService.currencyChanged.subscribe(
      (res: currencyexchange) => {
        this.currency = res.currency;
        this.exchangerate = res.exchangerate;
      }
    );
  }

  resetSubtotal() {
    this.Subtotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.Subtotal += (this.cart[i].fruit.fruitPrice * this.cart[i].quantity);
    }
  }

  onPlaceOrder(f: NgForm) {
    this.checkoutService.placeOrder(this.cart, f.value, this.discount).subscribe((res: any) => {
      if(res.status === 'success') {
        this.sharedService.cart = [];
        this.sharedService.discount = 0;
        this.router.navigate(['../Shop']);
      }
    })
  }
}
