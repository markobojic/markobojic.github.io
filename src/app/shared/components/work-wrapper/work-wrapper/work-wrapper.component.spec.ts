import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWrapperComponent } from './work-wrapper.component';

describe('WorkWrapperComponent', () => {
  let component: WorkWrapperComponent;
  let fixture: ComponentFixture<WorkWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
