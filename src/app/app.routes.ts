import { Routes } from '@angular/router';
import { WorkComponent } from './pages/work/work.component';
import { WorkDetailsComponent } from './pages/work-details/work-details.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'work',
    component: WorkComponent,
    // loadComponent: () =>
    //   import('./pages/work/work.component').then((c) => c.WorkComponent),
    data: { animation: 'Page1' },
  },
  {
    path: 'work/:id',
    component: WorkDetailsComponent,
    // loadComponent: () =>
    //   import('./pages/work-details/work-details.component').then(
    //     (c) => c.WorkDetailsComponent
    //   ),
    data: { animation: 'Page2' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
