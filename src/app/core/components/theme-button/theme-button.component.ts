import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme-service/theme.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss',
})
export class ThemeButtonComponent {
  themeService = inject(ThemeService);

  onToggleTheme() {
    this.themeService.toggleTheme();
  }
}
