import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService } from 'src/app/shared/component/card/service/card.service';
import { fruit } from 'src/app/shared/Interface/fruit.model';

import { currencyexchange } from 'src/app/shared/Interface/option.model';

import { HeaderService } from '../header/service/header.service';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  price = 75;
  currency!: string;
  exchangerate!: number;
  subscrition!: Subscription;
  lang: string | null = '';

  fruits!: fruit[];
  saleFruit!: fruit;
  saleQuantity: number = 0;
  saleEndTime: number = 0;

  saleCounterDays: number = 0;
  saleCounterHours: number = 0;
  saleCounterMins: number = 0;
  saleCounterSecs: number = 0;
  constructor(
    private headerService: HeaderService,
    private cardService: CardService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    // this.http.get('http://localhost:3000/all-fruits').subscribe((res: any) => this.fruits = res.fruits);
    // this.http.get('http://localhost:3000/fruits?pageSize=10&pageNumber=3').subscribe((res: any) => console.log(res));
    this.subscrition = this.headerService.currencyChanged.subscribe(
      (res: currencyexchange) => {
        this.currency = res.currency;
        this.exchangerate = res.exchangerate;
      }
    );
    this.getFruits();
    this.getSaleFruit();
    this.cardService.addFruit.subscribe((res) => console.log(res));
  }

  ngDoCheck() {
    this.lang = localStorage.getItem('lang');
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }

  onFruitSelect(fruit: fruit) {
    console.log(fruit);
  }

  getFruits() {
    this.homeService
      .getFruits(3, 1)
      .subscribe((res: any) => (this.fruits = res.fruits));
  }

  interval: any;
  getSaleFruit() {
    this.homeService.getSaleFruit().subscribe((res: any) => {
      this.saleFruit = res.saleFruit;
      this.saleEndTime = res.saleEndTime;
      this.countDown();
    });
  }
  countDown() {
    this.countTime(this.saleEndTime);
    this.saleEndTime = this.saleEndTime - 1000;
    this.interval = setInterval(() => {
    this.countTime(this.saleEndTime);
      this.saleEndTime = this.saleEndTime - 1000;
    }, 1000);
  }
  countTime(endTime: number) {
    // Time calculations for days, hours, minutes and seconds
    this.saleCounterDays = Math.floor(endTime / (1000 * 60 * 60 * 24));
    this.saleCounterHours = Math.floor(
      (endTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.saleCounterMins = Math.floor(
      (endTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.saleCounterSecs = Math.floor((endTime % (1000 * 60)) / 1000);
    if(endTime <= 0) {
      this.saleFruit.fruitSale = 0;
      clearInterval(this.interval);
    }
  }

  onAddToCart() {
    this.saleQuantity = 1;
    this.emitToCart();
  }

  onIncreaseQuantity() {
    this.saleQuantity += 1;
    // Math.round( this.quantity * 10 ) / 10;
    this.emitToCart();
  }

  onDecreaseQuantity() {
    this.saleQuantity -= 1;
    if (this.saleQuantity < 0) {
      this.saleQuantity = 0;
    }
    this.emitToCart();
  }

  onTypeOnInput() {
    if (this.saleQuantity < 0) {
      this.saleQuantity = 0;
    }
    if (this.saleQuantity) {
      this.emitToCart();
    }
  }

  emitToCart() {
    let fruit = this.saleFruit;
    let quantity = this.saleQuantity;
    this.cardService.addFruit.emit({ fruit, quantity });
  }



}
