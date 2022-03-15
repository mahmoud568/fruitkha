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
  constructor(private headerService: HeaderService, private cardService: CardService, private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.subscrition = this.headerService.currencyChanged.subscribe(
      (res: currencyexchange) => {
        this.currency = res.currency;
        this.exchangerate = res.exchangerate;
      }
    );
    this.getFruits();
    // this.http.get('http://localhost:3000/all-fruits').subscribe((res: any) => this.fruits = res.fruits);
    // this.http.get('http://localhost:3000/fruits?pageSize=10&pageNumber=3').subscribe((res: any) => console.log(res));
    this.cardService.addFruit.subscribe(res => console.log(res))
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
    this.homeService.getFruits(3, 1).subscribe((res: any) => this.fruits = res.fruits);
  }
}
