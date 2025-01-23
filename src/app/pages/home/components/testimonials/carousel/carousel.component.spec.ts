import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import { Renderer2, ElementRef } from '@angular/core';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponent],
      providers: [
        Renderer2,
        {
          provide: ElementRef,
          useValue: new ElementRef(document.createElement('div')),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    renderer = TestBed.inject(Renderer2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize totalSlides and slideWidth on ngAfterContentInit', () => {
    component.slides.reset([new ElementRef(document.createElement('div'))]);
    component.ngAfterContentInit();
    expect(component.totalSlides).toBe(1);
    expect(component.slideWidth).toBeGreaterThan(0);
  });

  it('should go to the specified slide', () => {
    component.totalSlides = 3;
    component.goToSlide(2);
    expect(component.currentSlide).toBe(2);
  });

  it('should update slide position on window resize', () => {
    spyOn<any>(component, '_calculateSlideWidth');
    spyOn<any>(component, '_updateSlidePosition');
    window.dispatchEvent(new Event('resize'));
    expect(component['_calculateSlideWidth']).toHaveBeenCalled();
    expect(component['_updateSlidePosition']).toHaveBeenCalled();
  });

  it('should handle drag start', () => {
    const event = { type: 'mousedown', clientX: 100 };
    component.onDragStart(event);
    expect(component.isDragging).toBeTrue();
    expect(component.startX).toBe(100);
  });

  it('should handle drag move', () => {
    component.isDragging = true;
    const event = { type: 'mousemove', clientX: 150 };
    component.onDragMove(event);
    expect(component.currentTranslate).toBeGreaterThan(0);
  });

  it('should handle drag end and switch slides', () => {
    component.isDragging = true;
    component.currentSlide = 0;
    component.totalSlides = 3;
    component.currentTranslate = -150;
    component.prevTranslate = 0;
    component.onDragEnd();
    expect(component.currentSlide).toBe(1);
  });

  it('should not switch slides if drag distance is insufficient', () => {
    component.isDragging = true;
    component.currentSlide = 0;
    component.totalSlides = 3;
    component.currentTranslate = -50;
    component.prevTranslate = 0;
    component.onDragEnd();
    expect(component.currentSlide).toBe(0);
  });

  it('should not update slide position if no slides are present', () => {
    component.slides.reset([]);
    window.dispatchEvent(new Event('resize'));
    expect(component.totalSlides).toBe(0);
  });

  it('should reset dragging state on drag end', () => {
    component.isDragging = true;
    component.onDragEnd();
    expect(component.isDragging).toBeFalse();
  });

  it('should not update translate if not dragging', () => {
    component.isDragging = false;
    const event = { type: 'mousemove', clientX: 150 };
    component.onDragMove(event);
    expect(component.currentTranslate).toBe(0);
  });

  it('should update translate correctly on drag move', () => {
    component.isDragging = true;
    component.startX = 100;
    const event = { type: 'mousemove', clientX: 150 };
    component.onDragMove(event);
    expect(component.currentTranslate).toBe(50);
  });

  it('should switch to the previous slide on drag end if dragged enough', () => {
    component.isDragging = true;
    component.currentSlide = 1;
    component.totalSlides = 3;
    component.currentTranslate = 150;
    component.prevTranslate = 0;
    component.onDragEnd();
    expect(component.currentSlide).toBe(0);
  });

  it('should not switch slides if drag distance is insufficient', () => {
    component.isDragging = true;
    component.currentSlide = 1;
    component.totalSlides = 3;
    component.currentTranslate = 10;
    component.prevTranslate = 0;
    component.onDragEnd();
    expect(component.currentSlide).toBe(1);
  });

  it('should prevent vertical scrolling if user moves left or right more than 5 pixels', () => {
    const touchEvent = new TouchEvent('touchmove', {
      touches: [new Touch({ identifier: 0, target: window, clientX: 100 })],
    });

    const startEvent = new TouchEvent('touchstart', {
      touches: [new Touch({ identifier: 0, target: window, clientX: 90 })],
    });

    component.onDragStart(startEvent);

    spyOn(touchEvent, 'preventDefault');

    component.onDragMove(touchEvent);

    expect(touchEvent.preventDefault).toHaveBeenCalled();
  });

  it('should not prevent vertical scrolling if user moves left or right 5 pixels or less', () => {
    const touchEvent = new TouchEvent('touchmove', {
      touches: [new Touch({ identifier: 0, target: window, clientX: 95 })],
    });

    const startEvent = new TouchEvent('touchstart', {
      touches: [new Touch({ identifier: 0, target: window, clientX: 90 })],
    });

    component.onDragStart(startEvent);

    spyOn(touchEvent, 'preventDefault');

    component.onDragMove(touchEvent);

    expect(touchEvent.preventDefault).not.toHaveBeenCalled();
  });
});
