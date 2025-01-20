import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobComponent } from './job.component';
import { Router } from '@angular/router';
import { Job } from '../../../../shared/models/job.model';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    component.job = {
      id: '1',
      position: 'Test Job',
      company: 'Test Company',
      dateStart: 'Test Date Start',
      dateEnd: 'Test Date End',
      responsibilities: 'Test Responsibilities',
      skills: ['Test Skill'],
      projects: [],
    } as Job;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to job details on onNavigateToJobDetails', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.onNavigateToJobDetails();
    expect(navigateSpy).toHaveBeenCalledWith(['work', component.job.id], {
      state: { data: component.job },
    });
  });
});
