import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavLinkComponent, RouterModule, ThemeButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
