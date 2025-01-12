import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'work',
    loadComponent: () =>
      import('./pages/work/work.component').then((c) => c.WorkComponent),
    data: { animation: 'Page1' },
  },
  {
    path: 'work/:id',
    loadComponent: () =>
      import('./pages/work-details/work-details.component').then(
        (c) => c.WorkDetailsComponent
      ),
    data: { animation: 'Page2' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
