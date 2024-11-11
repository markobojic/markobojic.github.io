import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageTransitionService {
  private transitioning = new BehaviorSubject<boolean>(false);
  isTransitioning$ = this.transitioning.asObservable();

  setTransitioning(state: boolean) {
    this.transitioning.next(state);
  }
}
