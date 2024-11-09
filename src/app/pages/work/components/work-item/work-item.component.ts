import { Component, inject, Input } from '@angular/core';
import { Job } from '../../../../shared/models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-item',
  standalone: true,
  imports: [],
  templateUrl: './work-item.component.html',
  styleUrl: './work-item.component.scss',
})
export class WorkItemComponent {
  router = inject(Router);
  @Input() job!: Job;

  onNavigateToJobDetails() {
    this.router.navigate(['work', this.job.id], { state: { data: this.job } });
  }
}
