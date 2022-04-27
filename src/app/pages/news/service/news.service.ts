import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseURL: string = "";
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.baseURL = this.sharedService.getBaseUrl();
  }

  // get News by size and page number
  getNews(pageSize: number,pageNumber: number) {
    return this.http.get(`${this.baseURL}news?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  }
}
