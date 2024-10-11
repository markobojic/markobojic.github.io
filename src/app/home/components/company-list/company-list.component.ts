import { Component } from '@angular/core';
import { CompanyItemComponent } from './company-item/company-item.component';
import { Company } from './company.model';
import { COMPANIES_DATA } from './company-data';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CompanyItemComponent],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent {
  companies: Company[] = COMPANIES_DATA;
}
