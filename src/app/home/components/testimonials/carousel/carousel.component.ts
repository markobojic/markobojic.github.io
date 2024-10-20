import { NgFor } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren('slide') slides!: QueryList<ElementRef>;
  @ViewChild('carouselContainer', { static: true })
  carouselContainer!: ElementRef;

  currentSlide = 0;
  totalSlides = 0;
  isDragging = false;
  startX = 0;
  translateX = 0;
  slideWidth = 0;

  ngAfterContentInit() {
    this.totalSlides = this.slides.length;
    this._calculateSlideWidth();
    this._updateSlidePosition();
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this._updateSlidePosition();
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.totalSlides - 1;
    }
    this._updateSlidePosition();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this._updateSlidePosition();
  }

  @HostListener('window:resize')
  onResize() {
    this._calculateSlideWidth();
    this._updateSlidePosition();
  }

  // Swipe gesture handling
  onDragStart(event: any) {
    this.isDragging = true;
    this.startX = event.touches ? event.touches[0].clientX : event.clientX;
  }

  onDragMove(event: any) {
    if (!this.isDragging) return;
    const currentX = event.touches ? event.touches[0].clientX : event.clientX;
    const deltaX = currentX - this.startX;

    const width = this.carouselContainer.nativeElement.offsetWidth;
    this.translateX = -this.currentSlide * width + deltaX;
  }

  onDragEnd() {
    this.isDragging = false;
    this._updateSlidePosition();
  }

  private _updateSlidePosition() {
    const width = this.carouselContainer.nativeElement.offsetWidth;
    this.translateX = -this.currentSlide * width;
  }

  private _calculateSlideWidth() {
    this.slideWidth = this.carouselContainer.nativeElement.offsetWidth;
    this.slides.forEach((slide) => {
      slide.nativeElement.style.width = `${this.slideWidth}px`;
    });
  }
}
