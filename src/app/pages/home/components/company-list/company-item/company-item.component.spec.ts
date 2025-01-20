import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyItemComponent } from './company-item.component';

describe('CompanyItemComponent', () => {
  let component: CompanyItemComponent;
  let fixture: ComponentFixture<CompanyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyItemComponent);
    component = fixture.componentInstance;
    component.company = {
      name: 'Company Name',
      url: 'url',
      imgSrc: 'imgSrc',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
