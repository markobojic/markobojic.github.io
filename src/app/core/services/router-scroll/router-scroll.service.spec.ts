import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterScrollService } from './router-scroll.service';
import { NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';

describe('RouterScrollService', () => {
  let service: RouterScrollService;
  let router: Router;
  let routerEventsSubject: Subject<any>;

  beforeEach(() => {
    routerEventsSubject = new Subject<any>();

    TestBed.configureTestingModule({
      providers: [
        RouterScrollService,
        {
          provide: Router,
          useValue: {
            events: routerEventsSubject.asObservable(),
          },
        },
      ],
    });

    service = TestBed.inject(RouterScrollService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should scroll to the top on NavigationEnd', () => {
    spyOn(window, 'scrollTo');

    routerEventsSubject.next(new NavigationEnd(1, '/test', '/test'));

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
