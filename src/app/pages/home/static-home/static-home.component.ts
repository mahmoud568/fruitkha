import { Component, OnInit } from '@angular/core';
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
    this.headerService.currencyChanged.subscribe((res: {currency: string, exchangerate: number}) => {
      this.currency = res.currency;
      this.exchangerate = res.exchangerate;
    });
  }

}
