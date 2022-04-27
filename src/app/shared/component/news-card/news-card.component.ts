import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from '../../Interface/news.modal';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() singleNews!: News;
  lang!: string | null;
  @Output() singleNewsSelected = new EventEmitter<News>()
  constructor() { }
  ngOnInit(): void {}

  ngDoCheck() {
    this.lang = localStorage.getItem('lang');
  }
}
