import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { SystemManagerProfileComponent } from './system-manager-profile/system-manager-profile.component';

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
    component: SystemManagerProfileComponent,
    data: {
      title: 'Profile Page',
    },
  },
];
