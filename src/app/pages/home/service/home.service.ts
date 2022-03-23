import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseURL: string = "";
  constructor(private http: HttpClient,private sharedService: SharedService) {
    this.baseURL = this.sharedService.getBaseUrl();
  }

  getFruits(pageSize: number,pageNumber: number) {
    return this.http.get(`${this.baseURL}fruits?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  }

  getSaleFruit() {
    return this.http.get(`${this.baseURL}sale-fruit`);
  }

  getTeam() {
    return this.http.get(`${this.baseURL}team`);
  }
}
