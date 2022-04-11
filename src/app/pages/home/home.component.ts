import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CardService } from 'src/app/shared/component/card/service/card.service';
import { fruit } from 'src/app/shared/Interface/fruit.model';
import { News } from 'src/app/shared/Interface/news.modal';
import { currencyexchange } from 'src/app/shared/Interface/option.model';
import { team } from 'src/app/shared/Interface/team.model';
import { SharedService } from 'src/app/shared/services/shared.service';
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
  isVideo! :boolean;

  fruits!: fruit[];
  saleFruit!: fruit;
  saleQuantity: number = 0;
  saleEndTime: number = 0;
  saleCounterDays: number = 0;
  saleCounterHours: number = 0;
  saleCounterMins: number = 0;
  saleCounterSecs: number = 0;

  team!: team[];
  news!: News[];
  constructor(
    private headerService: HeaderService,
    private cardService: CardService,
    private homeService: HomeService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.subscrition = this.headerService.currencyChanged.subscribe(
      (res: currencyexchange) => {
        this.currency = res.currency;
        this.exchangerate = res.exchangerate;
      }
    );
    this.getFruits();
    this.getSaleFruit();
    this.getTeam();
    this.getNews();
  }

  ngDoCheck() {
    this.lang = localStorage.getItem('lang');
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }

  // use function instead of router link to listen to special event not every click
  onFruitSelect(fruit: fruit) {
    this.router.navigate(['../Single-Product', fruit.fruitId]);
  }

  getFruits() {
    this.homeService
      .getFruits(3, 1)
      .subscribe((res: any) => {
        this.fruits = res.fruits;
      });
  }

  interval!: ReturnType<typeof setInterval>;
  getSaleFruit() {
    this.homeService.getSaleFruit().subscribe((res: any) => {
      this.saleFruit = res.saleFruit;
      let isThisFruitExistInCart = this.sharedService.cart.find((x) => x.fruit.fruitId == this.saleFruit.fruitId)
    if (isThisFruitExistInCart) {
      this.saleQuantity = isThisFruitExistInCart.quantity
    }
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

  getTeam() {
    this.homeService.getTeam().subscribe((res: any) => this.team = res.team);
  }

  getNews() {
    this.homeService.getNews(3, 1).subscribe((res: any) => this.news = res.news);
  }

  // use function instead of router link to listen to special event not every click
  ongSingleNewsSelected(singleNews: News) {
    this.router.navigate(['../Single-Product', singleNews.id]);
  }
}
