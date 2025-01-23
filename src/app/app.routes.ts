import { Routes } from '@angular/router';
import { WorkComponent } from './pages/work/work.component';
import { WorkDetailsComponent } from './pages/work-details/work-details.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
    data: { animation: 'Page1' },
  },
  {
    path: 'work/:id',
    component: WorkDetailsComponent,
    data: { animation: 'Page2' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
