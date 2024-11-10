import { Project } from './project.model';

export interface Job {
  id: string;
  position: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  responsibilities: string;
  skills: string[];
  projects: Project[];
}
