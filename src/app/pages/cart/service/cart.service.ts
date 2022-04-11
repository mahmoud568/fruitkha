import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseURL: string = "";
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.baseURL = this.sharedService.getBaseUrl();
  }

  submitCoupon(coupon: string) {
    return this.http.post(`${this.baseURL}coupon`, {
      coupon: JSON.stringify(coupon),
    });
  }
}
