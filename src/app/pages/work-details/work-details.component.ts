import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../../shared/models/job.model';
import { WorkWrapperComponent } from '../../shared/components/work-wrapper/work-wrapper.component';
import { JobSummaryComponent } from './components/job-summary/job-summary.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [
    WorkWrapperComponent,
    JobSummaryComponent,
    ProjectItemComponent,
    NgFor,
  ],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.scss',
})
export class WorkDetailsComponent {
  job: Job | undefined;

  constructor(private router: Router) {
    let data = this.router.getCurrentNavigation()?.extras.state?.['data'];

    this.job = data;
  }
}
