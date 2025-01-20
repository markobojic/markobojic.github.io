import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageTransitionService } from './core/services/page-transition/page-transition.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let transitionService: PageTransitionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        BrowserAnimationsModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
      ],
      providers: [
        PageTransitionService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),
            snapshot: {
              paramMap: {
                get: (key: string) => '123',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    transitionService = TestBed.inject(PageTransitionService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set transitioning to true on animation start', () => {
    spyOn(transitionService, 'setTransitioning');
    component.onAnimationStart();
    expect(transitionService.setTransitioning).toHaveBeenCalledWith(true);
  });

  it('should set transitioning to false on animation done', () => {
    spyOn(transitionService, 'setTransitioning');
    component.onAnimationDone();
    expect(transitionService.setTransitioning).toHaveBeenCalledWith(false);
  });
});
