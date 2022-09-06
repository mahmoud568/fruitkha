import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURL: string = "";
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.baseURL = this.sharedService.getBaseUrl();
  }

  // get Fruits by size and page number
  getFruits(pageSize: number,pageNumber: number, search?: string, lang?: string) {
    // put this conditio so http doent send undifind as string to backend
    if(search) {
      return this.http.get(`${this.baseURL}fruits?pageSize=${pageSize}&pageNumber=${pageNumber}&search=${search}&lang=${lang}`);
    } else {
      return this.http.get(`${this.baseURL}fruits?pageSize=${pageSize}&pageNumber=${pageNumber}`);
    }
  }

}
