import { Component, Input } from '@angular/core';
import { Job } from '../../../../shared/models/job.model';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';

@Component({
  selector: 'app-job-summary',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './job-summary.component.html',
  styleUrl: './job-summary.component.scss',
})
export class JobSummaryComponent {
  @Input() job: Job | undefined;
}
