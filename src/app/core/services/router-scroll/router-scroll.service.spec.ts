import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { RouterScrollService } from './router-scroll.service';
import { NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';

describe('RouterScrollService', () => {
  let service: RouterScrollService;
  let router: Router;
  let viewportScroller: ViewportScroller;
  let routerEventsSubject: Subject<any>;

  beforeEach(() => {
    routerEventsSubject = new Subject<any>();

    const routerMock = {
      events: routerEventsSubject.asObservable(),
    };

    const viewportScrollerMock = {
      scrollToPosition: jasmine.createSpy('scrollToPosition'),
    };

    TestBed.configureTestingModule({
      providers: [
        RouterScrollService,
        { provide: Router, useValue: routerMock },
        { provide: ViewportScroller, useValue: viewportScrollerMock },
      ],
    });

    service = TestBed.inject(RouterScrollService);
    router = TestBed.inject(Router);
    viewportScroller = TestBed.inject(ViewportScroller);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should scroll to the top on NavigationEnd', () => {
    routerEventsSubject.next(new NavigationEnd(1, '/test', '/test'));
    expect(viewportScroller.scrollToPosition).toHaveBeenCalledWith([0, 0]);
  });
});
