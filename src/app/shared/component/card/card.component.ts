import { Component, Input, OnInit } from '@angular/core';
import { fruit } from '../../Interface/fruit.model';
import { CardService } from './service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  quantity: number = 0;
  @Input() fruit!: fruit;
  @Input() currency!: string;
  @Input() exchangerate!: number;
  constructor(private cardService: CardService) { }

  ngOnInit(): void {}

  onAddToCart() {
    this.quantity = 1;
    this.emit();
  }

  onIncreaseQuantity() {
    this.quantity += 1;
    this.emit();
  }

  onDecreaseQuantity() {
    this.quantity -= 1;
    this.emit();
  }

  emit() {
    let fruit = this.fruit;
    let quantity = this.quantity
    this.cardService.addFruit.emit({fruit, quantity});
  }
}
