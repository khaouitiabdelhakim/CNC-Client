import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { FileVerifierProfileComponent } from './file-verifier-profile/file-verifier-profile.component';

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
    component: FileVerifierProfileComponent,
    data: {
      title: 'Profile Page',
    },
  },
];
