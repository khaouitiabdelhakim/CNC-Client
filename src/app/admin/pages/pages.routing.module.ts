import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const PagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Profile Page',
    },
  },
];
