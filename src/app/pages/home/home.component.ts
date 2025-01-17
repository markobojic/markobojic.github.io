import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, CompanyListComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('summary') summary!: ElementRef;

  onScroll() {
    this.summary.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
