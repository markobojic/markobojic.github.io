import { WorkWrapperComponent } from './../../shared/components/work-wrapper/work-wrapper/work-wrapper.component';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { WorkSummaryComponent } from './components/work-summary/work-summary.component';
import { Job } from './job.model';
import { WorkItemComponent } from './components/work-item/work-item.component';
import { WORK_DATA } from './work.data';
@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    WorkSummaryComponent,
    NgFor,
    WorkItemComponent,
    WorkWrapperComponent,
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  jobs: Job[] = WORK_DATA;
}
