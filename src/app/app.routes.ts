import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { WorkDetailsComponent } from './pages/work-details/work-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'work/:id',
    component: WorkDetailsComponent,
  },
];
