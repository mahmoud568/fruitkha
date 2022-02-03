import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { option } from '../../Interface/option.model';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  @Input() options!: option[];
  @Output() optionSelected = new EventEmitter<option>();
  constructor() { }

  ngOnInit(): void {
  }

}
