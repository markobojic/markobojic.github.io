import { Component, inject, Input } from '@angular/core';
import { Job } from '../../../../shared/models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
})
export class JobComponent {
  router = inject(Router);
  @Input() job!: Job;

  onNavigateToJobDetails() {
    this.router.navigate(['work', this.job.id], { state: { data: this.job } });
  }
}
