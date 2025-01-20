import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ElementRef } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.summary = new ElementRef(document.createElement('div'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to summary on onScroll', () => {
    const scrollIntoViewSpy = spyOn(
      component.summary.nativeElement,
      'scrollIntoView'
    );
    component.onScroll();
    expect(scrollIntoViewSpy).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
