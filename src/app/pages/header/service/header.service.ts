import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { currencyexchange } from 'src/app/shared/Interface/option.model';

import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  BASE_URL: string = '';
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.BASE_URL = this.sharedService.getBaseUrl()
  }

  @Output() currencyChanged = new EventEmitter<currencyexchange>();

  getCurrencyExchangerate() {
    return this.http.get(`${this.BASE_URL}exchangerate`);
  }

}
