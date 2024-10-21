import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { TestimonialItemComponent } from './testimonial-item/testimonial-item.component';
import { Testimonial } from './testimonial.model';
import { TESTIMONIALS_DATA } from './testimonials.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor, CarouselComponent, TestimonialItemComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = TESTIMONIALS_DATA;
}
