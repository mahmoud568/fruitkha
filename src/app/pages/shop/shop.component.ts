import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  pages: fruit[][] = [];
  pagesCount: number[] = [];
  activePageNumber: number = 1;
  currency!: string;
  exchangerate!: number;
  subscrition!: Subscription;
  constructor(
    private shopService: ShopService,
    private headerService: HeaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((res: any) => {
      // so if user search while in shop page values rest
      if(res.params.search || res.params.search != "") {
        this.pages = [];
        this.pagesCount = [];
      }
      this.getFruits(1, res.params.search);
    })
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

  getFruits(pageNumber: number, search?: string) {
    this.activePageNumber = pageNumber;
    this.onActivate();
    // only call new data  if it not called before
    // not the different between pages and array index
    if (!this.pages[pageNumber - 1]) {
      this.shopService.getFruits(6, pageNumber, search).subscribe((res: any) => {
        if(res.status != "error") {
          // for styleing the page number
        this.pages[pageNumber - 1] = res.fruits;
        // creat pagenator counter only if its empty in first call
        if (this.pagesCount.length < 1) {
          for (var i = 1; i <= res.pagesCount; i++) {
            this.pagesCount.push(i);
          }
        }
        }
      });
    }
  }

  onFruitSelect(fruit: fruit) {
    this.router.navigate(['../Single-Product', fruit.fruitId]);
  }

  // scroll up
  onActivate() {
    // window.scroll(0,0);
    window.scroll({
            top: 0,
            left: 0,
            //@ts-ignore
            behavior: 'instant'
     });
 }
}
