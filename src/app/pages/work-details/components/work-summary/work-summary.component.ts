import { Component, Input } from '@angular/core';
import { Job } from '../../../../shared/models/job.model';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';

@Component({
  selector: 'app-work-summary',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './work-summary.component.html',
  styleUrl: './work-summary.component.scss',
})
export class WorkSummaryComponent {
  @Input() workItem: Job | undefined;
}
