import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-item',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-item.component.html',
  styleUrl: './testimonial-item.component.scss',
})
export class TestimonialItemComponent {
  @Input() name!: string;
  @Input() feedback!: string;
  @Input() position!: string;
  @Input() imageSrc!: string;
}
