import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { fruit } from 'src/app/shared/Interface/fruit.model';
import { currencyexchange } from 'src/app/shared/Interface/option.model';
import { SharedService } from 'src/app/shared/services/shared.service';
import { HeaderService } from '../header/service/header.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: { fruit: fruit; quantity: number }[] = [];
  currency!: string;
  exchangerate!: number;
  subscrition!: Subscription;

  SubtotalInitialValue: number = 0
  Subtotal: number = 0;
  Shipping: number = 1;

  constructor(private sharedService: SharedService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.cart = this.sharedService.cart;
    this.cart[0].fruit.fruitPrice;

    this.Subtotal = this.cart.reduce(
      //@ts-ignore
      (previousValue, currentValue) => previousValue + (currentValue.fruit.fruitPrice * currentValue.quantity),
      this.SubtotalInitialValue
    );

    this.subscrition = this.headerService.currencyChanged.subscribe(
      (res: currencyexchange) => {
        this.currency = res.currency;
        this.exchangerate = res.exchangerate;
      }
    );
    console.log(this.cart)
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }

  onTypeOnInput() {
    this.SubtotalInitialValue = 0;
    this.Subtotal = this.cart.reduce(
      //@ts-ignore
      (previousValue, currentValue) => previousValue + (currentValue.fruit.fruitPrice * currentValue.quantity),
      this.SubtotalInitialValue
    );
  }
}
