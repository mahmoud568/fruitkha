import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  responsiveOptions;
  brands!: string[];
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 3,
      },
    ];
  }

  ngOnInit(): void {
    this.brands = [
      "assets/img/company-logos/1.png",
      "assets/img/company-logos/2.png",
      "assets/img/company-logos/3.png",
      "assets/img/company-logos/4.png",
      "assets/img/company-logos/5.png"]
  }


}
