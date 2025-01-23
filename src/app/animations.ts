import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

export const swipeAnimation = trigger('routeAnimations', [
  transition('Page1 => Page2', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('Page2 => Page1', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
]);
