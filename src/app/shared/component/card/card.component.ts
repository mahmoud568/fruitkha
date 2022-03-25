import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { fruit } from '../../Interface/fruit.model';
import { CardService } from './service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  quantity: number = 0;
  @Input() fruit!: fruit;
  @Input() currency!: string;
  @Input() exchangerate!: number;
  @Output() fruitSelected = new EventEmitter<fruit>();
  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  onAddToCart() {
    this.quantity = 1;
    this.emitToCart();
  }

  onIncreaseQuantity() {
    this.quantity += 1;
    // Math.round( this.quantity * 10 ) / 10;
    this.emitToCart();
  }

  onDecreaseQuantity() {
    this.quantity -= 1;
    if(this.quantity < 0) {
      this.quantity = 0;
    }
    this.emitToCart();
  }

  onTypeOnInput() {
    if(this.quantity < 0) {
      this.quantity = 0;
    }
    if(this.quantity) {
      this.emitToCart()
    }

  }

  emitToCart() {
    let fruit = this.fruit;
    let quantity = this.quantity;
    this.cardService.addFruit.emit({ fruit, quantity });
  }
}
