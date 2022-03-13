import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService } from 'src/app/shared/component/card/service/card.service';
import { fruit } from 'src/app/shared/Interface/fruit.model';

import { currencyexchange } from 'src/app/shared/Interface/option.model';

import { HeaderService } from '../header/service/header.service';

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

  fruit: fruit = {
    fruitId: 1,
    fruitName: 'Strawberry',
    fruitPrice: 85,
    fruitImg: '',
    fruitSale: 0,
  };
  constructor(private headerService: HeaderService, private cardService: CardService) {}

  ngOnInit(): void {
    this.subscrition = this.headerService.currencyChanged.subscribe(
      (res: currencyexchange) => {
        this.currency = res.currency;
        this.exchangerate = res.exchangerate;
      }
    );

    this.cardService.addFruit.subscribe(res => console.log(res))
  }

  ngDoCheck() {
    this.lang = localStorage.getItem('lang');
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }
}
