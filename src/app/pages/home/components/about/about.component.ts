import { Component, output } from '@angular/core';
import { ArrowIconComponent } from './arrow-icon/arrow-icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ArrowIconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  scrollToCompanies = output();

  onScrollToCompanies() {
    this.scrollToCompanies.emit();
  }
}
