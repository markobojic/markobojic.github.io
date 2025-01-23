import { Component } from '@angular/core';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NavLinkComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
