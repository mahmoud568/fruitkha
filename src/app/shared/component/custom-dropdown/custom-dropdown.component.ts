import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { scaleAnimation } from '../../animation/animation';

import { option } from '../../Interface/option.model';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  animations:[scaleAnimation]
})
export class CustomDropdownComponent implements OnInit {
  @Input() options!: option[];
  @Output() optionSelected = new EventEmitter<option>();
  constructor() { }

  ngOnInit(): void {
  }

}
