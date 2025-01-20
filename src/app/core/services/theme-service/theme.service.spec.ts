import { TestBed } from '@angular/core/testing';
import { Renderer2, RendererFactory2 } from '@angular/core';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let renderer2: Renderer2;

  beforeEach(() => {
    const rendererFactory2Spy = jasmine.createSpyObj('RendererFactory2', [
      'createRenderer',
    ]);
    renderer2 = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass']);
    rendererFactory2Spy.createRenderer.and.returnValue(renderer2);

    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: RendererFactory2, useValue: rendererFactory2Spy },
      ],
    });

    service = TestBed.inject(ThemeService);
  });

  it('should add light-theme class if not present', () => {
    spyOn(document.body.classList, 'contains').and.returnValue(false);
    service.toggleTheme();
    expect(renderer2.addClass).toHaveBeenCalledWith(
      document.body,
      'light-theme'
    );
  });

  it('should remove light-theme class if present', () => {
    spyOn(document.body.classList, 'contains').and.returnValue(true);
    service.toggleTheme();
    expect(renderer2.removeClass).toHaveBeenCalledWith(
      document.body,
      'light-theme'
    );
  });
});
