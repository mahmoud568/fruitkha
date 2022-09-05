import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardService } from 'src/app/shared/component/card/service/card.service';

import { fruit, fruitBenefit } from 'src/app/shared/Interface/fruit.model';
import { currencyexchange } from 'src/app/shared/Interface/option.model';
import { SharedService } from 'src/app/shared/services/shared.service';
import { HeaderService } from '../header/service/header.service';
import { SingleProductService } from './service/single-product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  fruit!: fruit;
  fruitBenefit!: fruitBenefit;
  quantity: number = 0;
  subscrition!: Subscription;
  currency!: string;
  exchangerate!: number;
  lang: string | null = '';
  ngDoCheck(): void {
    this.lang = localStorage.getItem('lang');
  }
  constructor(
    private route: ActivatedRoute,
    private singleProductService: SingleProductService,
    private headerService: HeaderService,
    private cardService: CardService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const fruitId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.getFruit(fruitId);
    this.subscrition = this.headerService.currencyChanged.subscribe(
      (res: currencyexchange) => {
        this.currency = res.currency;
        this.exchangerate = res.exchangerate;
      }
    );

  }

  getFruit(fruitId: number) {
    this.singleProductService.getFruit(fruitId).subscribe((res: any) => {
      if (res.status == 'success') {
        this.fruit = res.fruit;
        this.fruitBenefit = res.fruitBenefit;
      }
      this.isThisFruitExistInCart();
    });
  }

  // check  if this fruit exist in cart and if its change the quantity to it
  isThisFruitExistInCart() {
    let isThisFruitExistInCart = this.sharedService.cart.find(
      (x) => x.fruit.fruitId == this.fruit.fruitId
    );
    if (isThisFruitExistInCart) {
      this.quantity = isThisFruitExistInCart.quantity;
    }
  }

  onAddToCart() {
    this.quantity = 1;
    this.emitToCart();
  }

  onIncreaseQuantity() {
    this.quantity += 1;
    // Math.round( this.quantity * 10 ) / 10;
    this.emitToCart();
  }

  onDecreaseQuantity() {
    this.quantity -= 1;
    if (this.quantity < 0) {
      this.quantity = 0;
    }
    this.emitToCart();
  }

  onTypeOnInput() {
    if (this.quantity < 0) {
      this.quantity = 0;
    }
    if (this.quantity) {
      this.emitToCart();
    }
  }

  emitToCart() {
    let fruit = this.fruit;
    let quantity = this.quantity;
    this.cardService.addFruit.next({ fruit, quantity });
  }
}
