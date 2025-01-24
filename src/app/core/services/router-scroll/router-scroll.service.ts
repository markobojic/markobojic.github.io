import { Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class RouterScrollService {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof Scroll) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
