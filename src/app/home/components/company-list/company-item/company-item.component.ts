import { Component, Input } from '@angular/core';
import { Company } from '../company.model';
import { NgIf } from '@angular/common';
import { TooltipDirective } from '../tooltip/tooltip.directive';

@Component({
  selector: 'app-company-item',
  standalone: true,
  imports: [NgIf, TooltipDirective],
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss',
})
export class CompanyItemComponent {
  @Input() company!: Company;
}
