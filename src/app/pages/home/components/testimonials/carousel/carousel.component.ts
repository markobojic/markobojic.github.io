import { NgFor } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  inject,
  QueryList,
  Renderer2,
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
  renderer = inject(Renderer2);
  @ContentChildren('slide') slides!: QueryList<ElementRef>;
  @ViewChild('carouselContainer', { static: true })
  carouselContainer!: ElementRef;

  currentSlide = 0;
  totalSlides = 0;
  isDragging = false;
  startX = 0;
  translateX = 0;
  slideWidth = 0;
  currentTranslate = 0;
  prevTranslate = 0;
  animationID: any;

  ngAfterContentInit() {
    this.totalSlides = this.slides.length;
    this._calculateSlideWidth();
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
    this.startX = event.type.includes('touch')
      ? event.touches[0].clientX
      : event.clientX;
    this.prevTranslate = this.currentTranslate;
    cancelAnimationFrame(this.animationID);
  }

  onDragMove(event: any) {
    if (!this.isDragging) return;

    const currentX = event.type.includes('touch')
      ? event.touches[0].clientX
      : event.clientX;
    const deltaX = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + deltaX;
    this._setSlidePosition();
  }

  onDragEnd() {
    this.isDragging = false;

    // Check if drag distance is enough to switch slide
    const movedBy = this.currentTranslate - this.prevTranslate;
    if (movedBy < -100 && this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else if (movedBy > 100 && this.currentSlide > 0) {
      this.currentSlide--;
    }

    this._updateSlidePosition();
  }

  private _updateSlidePosition() {
    const width = this.carouselContainer.nativeElement.offsetWidth;
    this.currentTranslate = -this.currentSlide * width;
    this._setSlidePositionWithAnimation();
  }

  private _setSlidePositionWithAnimation() {
    this.renderer.setStyle(
      this.carouselContainer.nativeElement,
      'transition',
      'transform 0.5s ease'
    );
    this.renderer.setStyle(
      this.carouselContainer.nativeElement,
      'transform',
      `translateX(${this.currentTranslate}px)`
    );
  }

  private _calculateSlideWidth() {
    this.slideWidth = this.carouselContainer.nativeElement.offsetWidth;
    this.slides.forEach((slide) => {
      this.renderer.setStyle(
        slide.nativeElement,
        'width',
        `${this.slideWidth}px`
      );
    });
  }

  // Smooth transition for dragging
  private _setSlidePosition() {
    this.renderer.setStyle(
      this.carouselContainer.nativeElement,
      'transform',
      `translateX(${this.currentTranslate}px)`
    );
  }
}
