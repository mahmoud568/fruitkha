import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { option } from '../../Interface/option.model';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  animations:[
    trigger(
      'scaleAnimation', [
        transition(':enter', [
          style({transform: 'scaley(0) ',transformOrigin: 'top', height:'0', opacity: 0}),
          animate('500ms', style({transform: 'scaley(1)',transformOrigin: 'top', height:'*', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'scaley(1)',transformOrigin: 'top', height:'*', opacity: 1}),
          animate('500ms', style({transform: 'scaley(0)',transformOrigin: 'top', height:'0', opacity: 0}))

        ])
      ]
    ),
  ]
})
export class CustomDropdownComponent implements OnInit {
  @Input() options!: option[];
  @Output() optionSelected = new EventEmitter<option>();
  constructor() { }

  ngOnInit(): void {
  }

}
