import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { fruit } from 'src/app/shared/Interface/fruit.model';
import { currencyexchange } from 'src/app/shared/Interface/option.model';
import { HeaderService } from '../header/service/header.service';

import { ShopService } from './service/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  fruits!: fruit[];
  pagesCount: number[] = [];
  activePageNumber: number = 1;
  currency!: string;
  exchangerate!: number;
  subscrition!: Subscription;
  constructor(private shopService: ShopService,
    private headerService: HeaderService) {}

  ngOnInit(): void {
    this.getFruits(1);
    this.subscrition = this.headerService.currencyChanged.subscribe(
      (res: currencyexchange) => {
        this.currency = res.currency;
        this.exchangerate = res.exchangerate;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }

  getFruits(pageNumber: number) {
    this.shopService.getFruits(6, pageNumber).subscribe((res: any) => {
      this.fruits = res.fruits;
      // for styleing the page number
      this.activePageNumber = pageNumber;
      // creat pagenator counter only if its empty in first call
      if(this.pagesCount.length < 1) {
        for (var i = 1; i <= res.pagesCount; i++) {
          this.pagesCount.push(i)
        }
      }

    });
  }
}
