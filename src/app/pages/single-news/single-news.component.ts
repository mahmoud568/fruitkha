import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private singleNewsService: SingleNewsService
    ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSingleNews();
  }

  getSingleNews() {
    const fruitId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.singleNewsService.getSingleNews(fruitId).subscribe((res: any) => {
      this.singleNews = res.singleNews;
      // this.comments = res.comments.comment;
      this.comments = res.comments.comment;
      // console.log(this.singleNews);
      console.log(this.comments);
    })
  }

  ngDoCheck() {
    this.lang = localStorage.getItem('lang');
  }

  onSubmitComment(f: NgForm) {
    console.log(f);
    this.singleNews.id
    this.getSingleNews();
  }

  onSubmitReply(f: NgForm, commentId: number) {
    console.log(f);
    this.singleNews.id
    this.getSingleNews();
  }
}
