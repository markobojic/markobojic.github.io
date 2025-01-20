import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeButtonComponent } from './theme-button.component';
import { ThemeService } from '../../services/theme-service/theme.service';

describe('ThemeButtonComponent', () => {
  let component: ThemeButtonComponent;
  let fixture: ComponentFixture<ThemeButtonComponent>;
  let themeService: jasmine.SpyObj<ThemeService>;

  beforeEach(async () => {
    const themeServiceSpy = jasmine.createSpyObj('ThemeService', [
      'toggleTheme',
    ]);

    await TestBed.configureTestingModule({
      imports: [ThemeButtonComponent],
      providers: [{ provide: ThemeService, useValue: themeServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeButtonComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService) as jasmine.SpyObj<ThemeService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleTheme on ThemeService when onToggleTheme is called', () => {
    component.onToggleTheme();
    expect(themeService.toggleTheme).toHaveBeenCalled();
  });
});
