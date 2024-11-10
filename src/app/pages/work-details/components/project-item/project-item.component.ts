import { Component, Input } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent {
  @Input() project!: Project;
}
