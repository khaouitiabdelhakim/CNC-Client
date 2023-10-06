import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

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
    component: StudentProfileComponent,
    data: {
      title: 'Profile Page',
    },
  },
];
