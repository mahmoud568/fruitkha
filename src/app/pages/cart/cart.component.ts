import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { NgbdModalConfirmComponent } from 'src/app/shared/component/ngbd-modal-confirm/ngbd-modal-confirm.component';

import { fruit } from 'src/app/shared/Interface/fruit.model';
import { currencyexchange } from 'src/app/shared/Interface/option.model';
import { SharedService } from 'src/app/shared/services/shared.service';
import { HeaderService } from '../header/service/header.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: { fruit: fruit; quantity: number }[] = [];
  currency!: string;
  exchangerate!: number;
  subscrition!: Subscription;

  Subtotal: number = 0;
  Shipping: number = 1;

  discount: number = 0;
  ngModalConfig: NgbModalOptions = {
    centered: true,
    backdrop: 'static',
    keyboard: false,
  };
  constructor(
    private sharedService: SharedService,
    private headerService: HeaderService,
    private modalService: NgbModal,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // we toke new cart array of array so if any changes happen doesnt effect cart array
    this.cart = JSON.parse(JSON.stringify(this.sharedService.cart));
    // the  initial value of Subtotal
    this.resetSubtotal();

    this.subscrition = this.headerService.currencyChanged.subscribe(
      (res: currencyexchange) => {
        this.currency = res.currency;
        this.exchangerate = res.exchangerate;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }

  onTypeOnInput(item: { fruit: fruit; quantity: number }) {
    if (this.cart[this.cart.indexOf(item)].quantity < 0) {
      this.cart[this.cart.indexOf(item)].quantity = 0;
    }
    if(item.quantity == 0) {
      const modalRef = this.modalService.open(
        NgbdModalConfirmComponent,
        this.ngModalConfig
      );
      // on closing the modal
      modalRef.result.then((res) => {
        if (res === 'ok') {
          this.onDelete(item)
        } else {
          this.cart[this.cart.indexOf(item)].quantity = 1;
        }
      });
    }
    this.resetSubtotal();
  }

  resetSubtotal() {
    this.Subtotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.Subtotal += (this.cart[i].fruit.fruitPrice * this.cart[i].quantity);
    }
  }
  onDelete(item: { fruit: fruit; quantity: number }) {
    this.cart.splice(this.cart.indexOf(item), 1);
    this.resetSubtotal();
  }

  onUpadeCart() {
    // using ngbootstrap open confirm modal
    const modalRef = this.modalService.open(
      NgbdModalConfirmComponent,
      this.ngModalConfig
    );
    // on closing the modal
    modalRef.result.then((res) => {
      if (res === 'ok') {
        this.sharedService.cart = this.cart;
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this.cart = JSON.parse(JSON.stringify(this.sharedService.cart));
      }
    });
  }

  submitCoupon(coupon: string) {
    this.cartService.submitCoupon(coupon).subscribe((res: any) => {
      this.discount = res.discount
      if(this.discount > 0) this.sharedService.discount = this.discount
    })
  }

}
