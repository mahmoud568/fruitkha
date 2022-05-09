import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../component/card/service/card.service';
import { fruit } from '../Interface/fruit.model';

const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isLogedin: boolean = false;

  cart: { fruit: fruit; quantity: number }[] = [] ;
  discount: number = 0;

  constructor(private router: Router, private cardService: CardService) {
    this.cart = JSON.parse(localStorage.getItem("cart")!);
    this.cardService.addFruit.subscribe((res) => {
      // check if the cart is empty or this item not exist in it
      if (
        this.cart.length == 0 ||
        !this.cart.some((x) => x.fruit.fruitId == res.fruit.fruitId)
      ) {
        this.cart.push(res);
      } else {
        this.cart.find((x) => x.fruit.fruitId == res.fruit.fruitId)!.quantity =
          res.quantity;
        // check if any cart items reach 0
        let IsAnyCartItemQuantityReachZero = this.cart.find(
          (x) => x.quantity == 0
        );
        if (IsAnyCartItemQuantityReachZero) {
          // findthe index of that item and delete it
          this.cart.splice(
            this.cart.indexOf(IsAnyCartItemQuantityReachZero),
            1
          );
        }
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    });
  }

  getBaseUrl() {
    return `${BASE_URL}`;
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/refresh', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
}
