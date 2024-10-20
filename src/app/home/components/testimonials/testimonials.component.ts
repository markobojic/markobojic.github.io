import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { TestimonialItemComponent } from './testimonial-item/testimonial-item.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor, CarouselComponent, TestimonialItemComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'John Doe',
      feedback: 'This is a fantastic service!',
      position: 'CEO, Company Inc.',
      imageSrc: 'assets/john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      feedback: 'I absolutely loved the experience!',
      position: 'CTO, Tech Solutions',
      imageSrc: 'assets/jane-smith.jpg',
    },
    {
      name: 'Alex Johnson',
      feedback: 'Highly recommend to anyone looking for quality!',
      position: 'Product Manager, Web Corp',
      imageSrc: 'assets/alex-johnson.jpg',
    },
  ];
}
