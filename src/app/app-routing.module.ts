import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './admin/layouts/blank/blank.component';
import { FullComponent } from './admin/layouts/full/full.component';
import { StudentFullComponent } from './student/layouts/full/student-full.component';
import { GradeEntryAgentFullComponent } from './grade-entry-agent/layouts/full/grade-entry-agent-full.component';
import { FileVerifierFullComponent } from './file-verifier/layouts/full/file-verifier-full.component';
import { SystemManagerFullComponent } from './system-manager/layouts/full/system-manager-full.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GuardAdminGuard } from './guard/guard-admin.guard';
import { GuardStudentGuard } from './guard/guard-student.guard';
import { GuardGradeEntryAgentGuard } from './guard/guard-grade-entry-agent.guard';
import { GuardFileVerifierGuard } from './guard/guard-file-verifier.guard';
import { GuardSystemManagerGuard } from './guard/guard-system-manager.guard';
import { GuardValidatedProfileGuard } from './guard/guard-validated-profile.guard';

const routes: Routes = [

  { path: '', component: HomePageComponent },

  // for admin
  {
    path: '',
    component: FullComponent,
    canActivate: [GuardAdminGuard],
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/pages/pages.module').then((m) => m.PagesModule),
      },
    
      {
        path: 'admin/users',
        loadChildren: () =>
          import('./admin/pages/users/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
    ],
  },

  // for student
  {
    path: '',
    canActivate: [GuardStudentGuard],
    component: StudentFullComponent,
    children: [
      {
        path: 'student',
        loadChildren: () =>
          import('./student/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        canActivate: [GuardValidatedProfileGuard],
        path: 'student/inscription-ecrit',
        loadChildren: () =>
          import('./student/pages/inscription-ecrit/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        canActivate: [GuardValidatedProfileGuard],
        path: 'student/inscription-oral',
        loadChildren: () =>
          import('./student/pages/inscription-oral/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
    ],
  },

  


  // for grade entry agent
  {
    path: '',
    canActivate: [GuardGradeEntryAgentGuard],
    component: GradeEntryAgentFullComponent,
    children: [
      {
        path: 'grade-entry-agent',
        loadChildren: () =>
          import('./grade-entry-agent/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'grade-entry-agent',
        loadChildren: () =>
          import('./grade-entry-agent/pages/tasks/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
    ],
  },

  // for file verifier
  {
    path: '',
    canActivate: [GuardFileVerifierGuard],
    component: FileVerifierFullComponent,
    children: [
    
      {
        path: 'file-verifier',
        loadChildren: () =>
          import('./file-verifier/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'file-verifier',
        loadChildren: () =>
          import('./file-verifier/pages/tasks/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
    ],
  },


   // for system manager
   {
    path: '',
    canActivate: [GuardSystemManagerGuard],
    component: SystemManagerFullComponent,
    children: [
      
      {
        path: 'system-manager',
        loadChildren: () =>
          import('./system-manager/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'system-manager',
        loadChildren: () =>
          import('./system-manager/pages/tasks/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
    ],
  },





  
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
