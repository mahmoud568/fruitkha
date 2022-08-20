import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  baseURL: string = "";
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.baseURL = this.sharedService.getBaseUrl();
  }

  getSaleFruit() {
    return this.http.get(`${this.baseURL}sale-fruit`);
  }

  getFarmers() {
    return this.http.get(`${this.baseURL}farmers`);
  }

  getTeam() {
    return this.http.get(`${this.baseURL}team`);
  }
}
