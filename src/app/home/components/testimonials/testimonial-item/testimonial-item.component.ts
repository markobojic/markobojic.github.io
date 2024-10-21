import { Component, Input } from '@angular/core';
import { Testimonial } from '../testimonial.model';

@Component({
  selector: 'app-testimonial-item',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-item.component.html',
  styleUrl: './testimonial-item.component.scss',
})
export class TestimonialItemComponent {
  @Input() testimonial!: Testimonial;
}
