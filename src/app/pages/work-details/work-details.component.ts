import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../../shared/models/job.model';
import { WorkWrapperComponent } from '../../shared/components/work-wrapper/work-wrapper.component';
import { WorkSummaryComponent } from './components/work-summary/work-summary.component';

@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [WorkWrapperComponent, WorkSummaryComponent],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.scss',
})
export class WorkDetailsComponent {
  workItem: Job | undefined;

  constructor(private router: Router) {
    let data = this.router.getCurrentNavigation()?.extras.state?.['data'];

    this.workItem = data;
  }
}
