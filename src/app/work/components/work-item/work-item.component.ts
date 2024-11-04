import { Component, Input } from '@angular/core';
import { Job } from '../../job.model';

@Component({
  selector: 'app-work-item',
  standalone: true,
  imports: [],
  templateUrl: './work-item.component.html',
  styleUrl: './work-item.component.scss',
})
export class WorkItemComponent {
  @Input() job!: Job;
}
