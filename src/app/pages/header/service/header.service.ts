import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  BASE_URL: string = '';
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.BASE_URL = this.sharedService.getBaseUrl()
  }

  getCurrencyExchangerate() {
    return this.http.get(`${this.BASE_URL}exchangerate`);
  }

  @Output() currencyChanged = new EventEmitter<{currency: string, exchangerate: number}>();
}
