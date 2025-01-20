import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialItemComponent } from './testimonial-item.component';

describe('TestimonialItemComponent', () => {
  let component: TestimonialItemComponent;
  let fixture: ComponentFixture<TestimonialItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialItemComponent);
    component = fixture.componentInstance;
    component.testimonial = {
      name: 'Test Name',
      feedback: 'Test Feedback',
      position: 'Test Position',
      imageSrc: 'Test Image Src',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
