import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { fruit } from 'src/app/shared/Interface/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  @Output() addFruit = new Subject<{fruit: fruit, quantity: number}>();
}
