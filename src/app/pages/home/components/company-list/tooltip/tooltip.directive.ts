import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText!: string | null;
  tooltipElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.tooltipText) {
      this.showTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.hideTooltip();
    }
  }

  showTooltip() {
    if (this.tooltipText) {
      this.tooltipElement = this.renderer.createElement('span');
      this.tooltipElement.innerHTML = this.tooltipText;
      this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
      this.renderer.addClass(this.tooltipElement, 'tooltip');
    }
  }

  hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
    }
  }
}
