import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class SingleNewsService {
  baseURL: string = "";
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.baseURL = this.sharedService.getBaseUrl();
  }

  // get Fruits by size and page number
  getSingleNews(id: number) {
    return this.http.get(`${this.baseURL}single-news?id=${id}`);
  }

  submitComment(newsID: number, comment: any) {
    return this.http.post(`${this.baseURL}submit-comment?newsID=${newsID}`, {
      comment: JSON.stringify(comment),
    });
  }

  submitReply(newsID: number,commentID: number, reply: any) {
    return this.http.post(`${this.baseURL}submit-reply?newsID=${newsID}&commentID=${commentID}`, {
      reply: JSON.stringify(reply),
    });
  }
}
