import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss',
})
export class NavLinkComponent {
  @Input() routerLink!: string;
  @Input() linkText!: string;
}
