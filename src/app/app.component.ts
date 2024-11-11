import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { swipeAnimation } from './animations';
import { PageTransitionService } from './core/services/page-transition/page-transition.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [swipeAnimation],
})
export class AppComponent {
  transitionService = inject(PageTransitionService);

  onAnimationStart() {
    this.transitionService.setTransitioning(true);
  }

  onAnimationDone() {
    this.transitionService.setTransitioning(false);
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
