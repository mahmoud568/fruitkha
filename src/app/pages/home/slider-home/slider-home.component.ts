import { Component, OnInit } from '@angular/core';
import { enterAnimation } from 'src/app/shared/animation/animation';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss'],
  animations: [enterAnimation],
})
export class SliderHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // images = ['../../../assets/img/grape-bg.jpg', '../../../assets/img/hero-bg-2.jpg', '../../../assets/img/hero-bg-3.jpg'];
}
