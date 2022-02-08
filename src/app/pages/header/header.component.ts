import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { option } from 'src/app/shared/Interface/option.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translatey(-10%)', opacity: 0}),
          animate('500ms', style({transform: 'translatey(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translatey(0)', opacity: 1}),
          animate('500ms', style({transform: 'translatey(-10%)', opacity: 0}))

        ])
      ],
    ),
    trigger(
      'scaleAnimation', [
        transition(':enter', [
          style({transform: 'scaley(0) ',transformOrigin: 'top', height:'0',
          overflow: 'hidden' , opacity: 0}),
          animate('500ms', style({transform: 'scaley(1)',transformOrigin: 'top', height:'*',
          overflow: 'hidden' , opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'scaley(1)',transformOrigin: 'top', height:'*',
          overflow: 'hidden' , opacity: 1}),
          animate('500ms', style({transform: 'scaley(0)',transformOrigin: 'top', height:'0',
          overflow: 'hidden' , opacity: 0}))

        ])
      ]
    ),

  ],
})
export class HeaderComponent implements OnInit {
  isMenuBarOpen!: boolean;
  showHoverDropdown: string = '';
  showToggleDropdown: string = '';

  homeOptions: option[] = [
    {
      id: 1,
      title: 'Static Home',
      value: 'static'
    },
    {
      id: 2,
      title: 'Slider Home',
      value: 'slider'
    }
  ]

  pagesOptions: option[] = [
    {
      id: 1,
      title: '404 page',
      value: '404'
    },
    {
      id: 2,
      title: 'About',
      value: 'about'
    },
    {
      id: 3,
      title: 'Cart',
      value: 'cart'
    },
    {
      id: 4,
      title: 'Check Out',
      value: 'checkOut'
    },
    {
      id: 5,
      title: 'Contact',
      value: 'contact'
    },
    {
      id: 6,
      title: 'News',
      value: 'news'
    },
    {
      id: 7,
      title: 'Shop',
      value: 'shop'
    },

  ]


  shopOptions: option[] = [
    {
      id: 1,
      title: 'Shop',
      value: 'shop'
    },
    {
      id: 2,
      title: 'Check Out',
      value: 'checkOut'
    },
    {
      id: 3,
      title: 'Cart',
      value: 'cart'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
  // @ViewChild('navbar') navbar!: ElementRef;
  // @HostListener("window:scroll", []) onWindowScroll() {
  //   // do some stuff here when the window is scrolled
  //   const verticalOffset = window.pageYOffset
  //         || document.documentElement.scrollTop
  //         || document.body.scrollTop || 0;
  //   if(verticalOffset != 0) this.navbar.nativeElement.classList.add('scrolled');
  //   else this.navbar.nativeElement.classList.remove('scrolled');
  // }

  openMenuBar() {
    this.isMenuBarOpen = !this.isMenuBarOpen;
  }

  onHoverDropdown(tap: string, eventType: string) {
    if(eventType === 'mouseover') this.showHoverDropdown = tap;
    else this.showHoverDropdown = '';
  }

  onToggleDropdown(tap: string, eventType: string) {
    if(this.showToggleDropdown !== tap) this.showToggleDropdown = tap;
    else this.showToggleDropdown = '';
  }

  onOptionSelect(event: object) {
    console.log(event)
  }

  changelang() {

  }
}
