import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { GradeEntryAgentProfileComponent } from './grade-entry-agent-profile/grade-entry-agent-profile.component';

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
    component: GradeEntryAgentProfileComponent,
    data: {
      title: 'Profile Page',
    },
  },
];
