import { Component } from '@angular/core';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NavLinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
