import { AsyncPipe } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { PageTransitionService } from '../../../core/services/page-transition/page-transition.service';

@Component({
  selector: 'app-work-wrapper',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './work-wrapper.component.html',
  styleUrl: './work-wrapper.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class WorkWrapperComponent {
  pageTransitionService = inject(PageTransitionService);

  isTransitioning$ = this.pageTransitionService.isTransitioning$;
}
