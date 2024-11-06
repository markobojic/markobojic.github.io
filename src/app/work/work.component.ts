import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import { WorkSummaryComponent } from './components/work-summary/work-summary.component';
import { Job } from './job.model';
import { WorkItemComponent } from './components/work-item/work-item.component';
import { WORK_DATA } from './work.data';
@Component({
  selector: 'app-work',
  standalone: true,
  imports: [WorkSummaryComponent, NgFor, WorkItemComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class WorkComponent {
  jobs: Job[] = WORK_DATA;
}
