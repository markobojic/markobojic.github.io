import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, CompanyListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('companies') companies!: ElementRef;

  onScroll() {
    this.companies.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
