import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from 'src/app/shared/Interface/news.modal';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  pages: News[][] = [];
  pagesCount: number[] = [];
  activePageNumber: number = 1;
  constructor(private newsService: NewsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getNews(1);
  }

  getNews(pageNumber: number) {
    this.activePageNumber = pageNumber;
    // only call new data  if it not called before
    // not the different between pages and array index
    if (!this.pages[pageNumber - 1]) {
      this.newsService.getNews(6, pageNumber).subscribe((res: any) => {
        // for styleing the page number
        this.pages[pageNumber - 1] = res.news;
        // creat pagenator counter only if its empty in first call
        if (this.pagesCount.length < 1) {
          for (var i = 1; i <= res.pagesCount; i++) {
            this.pagesCount.push(i);
          }
        }
      });
    }
  }

  onSingleNewsSelect(news: News) {
    this.router.navigate(['../Single-News', news.id]);
  }
}
