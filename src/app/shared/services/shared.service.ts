import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const BASE_URL = 'https://fruitkha.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isLogedin: boolean = false;
  constructor(private router: Router) {}

  getBaseUrl() {
    return `${BASE_URL}`;
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/refresh', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

}
