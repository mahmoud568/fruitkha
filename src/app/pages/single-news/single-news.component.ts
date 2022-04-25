import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Comment, News } from 'src/app/shared/Interface/news.modal';
import { SingleNewsService } from './service/single-news.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit {
  singleNews!: News;
  comments: Comment[] = [];
  lang!: string | null;
  reply!: number;
  // dateCount!: string;
  constructor(
    private singleNewsService: SingleNewsService
    ,private route: ActivatedRoute,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.getSingleNews();

  }

  getSingleNews() {
    const fruitId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.singleNewsService.getSingleNews(fruitId).subscribe((res: any) => {
      this.singleNews = res.singleNews;
      this.comments = res.comments.comment;
      this.singleNews.dateCount = this.countTime(this.singleNews.date);
      this.comments.map(comment=> {
        comment.dateCount = this.countTime(comment.date);
        comment.reply.map(reply => {
          reply.dateCount = this.countTime(reply.date);
        })
      })
    })
  }

  ngDoCheck() {
    this.lang = localStorage.getItem('lang');
  }

  countTime(endTime: Date) {
    const timePasses =  (+ new Date()) - (+ new Date(endTime))
    // Time calculations for days, hours, minutes and seconds
    const Days = Math.floor(timePasses / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((timePasses % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Mins = Math.floor((timePasses % (1000 * 60 * 60)) / (1000 * 60));
    const Secs = Math.floor((timePasses % (1000 * 60)) / 1000);

    if(Days > 0) {
      if(Days > 31) {
        return 0;
      }
      return Days + this.translate.instant('SINGLE-NEWS.Days-Ago')
    }
    else if(Hours > 0) return Hours + this.translate.instant('SINGLE-NEWS.Hours-Ago') ;
    else if(Mins > 0) return Mins + this.translate.instant('SINGLE-NEWS.Mins-Ago');
    else if(Secs > 0) return Secs + this.translate.instant('SINGLE-NEWS.Secs-Ago');
    return 0;
  }

  onSubmitComment(f: NgForm) {
    // console.log(f);
    // this.singleNews.id
    this.singleNewsService.submitComment(this.singleNews.id, f).subscribe(res => this.getSingleNews());

  }

  onSubmitReply(f: NgForm, commentId: number) {
    // console.log(f);
    // this.singleNews.id
    this.singleNewsService.submitReply(this.singleNews.id,commentId , f).subscribe(res => this.getSingleNews());
  }
}
