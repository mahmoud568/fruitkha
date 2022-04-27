import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class SingleProductService {
  baseURL: string = "";
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.baseURL = this.sharedService.getBaseUrl();
  }

  // get Fruits by size and page number
  getFruit(fruitId: number) {
    return this.http.get(`${this.baseURL}fruit?fruitId=${fruitId}`);
  }
}
