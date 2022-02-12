import { animate, style, transition, trigger } from "@angular/animations";

export const enterAnimation = trigger(
    'enterAnimation', [
      transition(':enter', [
        style({transform: 'translatey(-10%)', opacity: 0}),
        animate('300ms', style({transform: 'translatey(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translatey(0)', opacity: 1}),
        animate('300ms', style({transform: 'translatey(-10%)', opacity: 0}))

      ])
    ],
  )

  export const scaleAnimation = trigger(
    'scaleAnimation', [
      transition(':enter', [
        style({transform: 'scaley(0) ',transformOrigin: 'top', height:'0' , opacity: 0}),
        animate('300ms', style({transform: 'scaley(1)',transformOrigin: 'top', height:'*' , opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'scaley(1)',transformOrigin: 'top', height:'*' , opacity: 1}),
        animate('300ms', style({transform: 'scaley(0)',transformOrigin: 'top', height:'0' , opacity: 0}))

      ])
    ]
  )