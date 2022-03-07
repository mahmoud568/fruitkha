import { Component, OnInit } from '@angular/core';

import { currencyexchange } from 'src/app/shared/Interface/option.model';
import { HeaderService } from '../../header/service/header.service';

@Component({
  selector: 'app-static-home',
  templateUrl: './static-home.component.html',
  styleUrls: ['./static-home.component.scss']
})
export class StaticHomeComponent implements OnInit {
  price = 500;
  currency!: string;
  exchangerate!: number;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
    // this.headerService.currencyChanged.subscribe((res: currencyexchange) => {
    //   this.currency = res.currency;
    //   this.exchangerate = res.exchangerate;
    //   setInterval(()=> console.log("Hello"), 1000);
    // });
  }

}
