import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  BASE_URL: string = '';

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.BASE_URL = this.sharedService.getBaseUrl()
  }

  onSubscribe(email: string) {
    return this.http.post(`${this.BASE_URL}subscribe`, {
      email: JSON.stringify(email),
    });
  }
}
