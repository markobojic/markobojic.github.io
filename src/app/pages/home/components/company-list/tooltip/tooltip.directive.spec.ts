import { TooltipDirective } from './tooltip.directive';
import { ElementRef, Renderer2, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  template: `<div appTooltip="Test Tooltip"></div>`,
})
class TestComponent {}

@NgModule({
  declarations: [TestComponent],
})
class TestModule {}

describe('TooltipDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: TooltipDirective;
  let el: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule], // Use TestModule instead of TestComponent
      providers: [
        {
          provide: ElementRef,
          useValue: new ElementRef(document.createElement('div')),
        },
        {
          provide: Renderer2,
          useValue: {
            createElement: jasmine
              .createSpy('createElement')
              .and.returnValue(document.createElement('span')),
            appendChild: jasmine.createSpy('appendChild'),
            removeChild: jasmine.createSpy('removeChild'),
            addClass: jasmine.createSpy('addClass'),
          },
        },
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = TestBed.inject(ElementRef);
    renderer = TestBed.inject(Renderer2);
    directive = new TooltipDirective(el, renderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should show tooltip on mouse enter', () => {
    directive.tooltipText = 'Test Tooltip';
    directive.onMouseEnter();
    expect(renderer.createElement).toHaveBeenCalledWith('span');
    expect(renderer.appendChild).toHaveBeenCalled();
    expect(renderer.addClass).toHaveBeenCalledWith(
      jasmine.any(HTMLElement),
      'tooltip'
    );
  });

  it('should hide tooltip on mouse leave', () => {
    directive.tooltipElement = document.createElement('span');
    directive.onMouseLeave();
    expect(renderer.removeChild).toHaveBeenCalled();
  });

  it('should not show tooltip if tooltipText is null', () => {
    directive.tooltipText = null;
    directive.onMouseEnter();
    expect(renderer.createElement).not.toHaveBeenCalled();
  });
});
