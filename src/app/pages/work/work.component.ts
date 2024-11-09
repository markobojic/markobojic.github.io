import { WorkWrapperComponent } from './../../shared/components/work-wrapper/work-wrapper.component';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { WorkSummaryComponent } from './components/work-summary/work-summary.component';
import { Job } from '../../shared/models/job.model';
import { JobComponent } from './components/job/job.component';
import { WORK_DATA } from '../../shared/data/work.data';
@Component({
  selector: 'app-work',
  standalone: true,
  imports: [WorkSummaryComponent, NgFor, JobComponent, WorkWrapperComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  jobs: Job[] = WORK_DATA;
}
