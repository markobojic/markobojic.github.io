import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../shared/models/job.model';
import { WorkWrapperComponent } from '../../shared/components/work-wrapper/work-wrapper.component';

@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [WorkWrapperComponent],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.scss',
})
export class WorkDetailsComponent {
  workDetails: Job | undefined;

  constructor(private router: Router) {
    let data = this.router.getCurrentNavigation()?.extras.state?.['data'];

    this.workDetails = data;
  }
}
