import { TestBed } from '@angular/core/testing';
import { PageTransitionService } from './page-transition.service';

describe('PageTransitionService', () => {
  let service: PageTransitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTransitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set transitioning state', (done: DoneFn) => {
    service.setTransitioning(true);
    service.isTransitioning$.subscribe((state) => {
      expect(state).toBe(true);
      done();
    });
  });

  it('should update transitioning state', (done: DoneFn) => {
    service.setTransitioning(false);
    service.isTransitioning$.subscribe((state) => {
      expect(state).toBe(false);
      done();
    });
  });
});
