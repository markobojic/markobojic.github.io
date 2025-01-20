import { Component, Input } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent {
  @Input() project!: Project;
}
