import { EventEmitter, Injectable, Output } from '@angular/core';
import { fruit } from 'src/app/shared/Interface/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  @Output() addFruit = new EventEmitter<{fruit: fruit, quantity: number}>();
}
