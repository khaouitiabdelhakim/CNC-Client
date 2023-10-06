import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FileVerifierComponent } from './file-verifier/file-verifier.component';
import { GradeEntryAgentComponent } from './grade-entry-agent/grade-entry-agent.component';
import { SystemManagerComponent } from './system-manager/system-manager.component';
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddFileVerifierComponent } from './add-file-verifier/add-file-verifier.component';
import { AddGradeEntryManagerComponent } from './add-grade-entry-manager/add-grade-entry-manager.component';
import { AddSystemManagerComponent } from './add-system-manager/add-system-manager.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ProfileComponent } from '../profile/profile.component';
import { OneStudentComponent } from './one-student/one-student.component';

// ui


export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'students',
        component: StudentComponent,
      },
      {
        path: 'students/:id', // Use ':' instead of '{' and '}'
        component: OneStudentComponent,
      },
      
      {
        path: 'add-student',
        component: AddStudentComponent,
      },
      {
        path: 'file-verifiers',
        component: FileVerifierComponent,
      },
      {
        path: 'add-file-verifier',
        component: AddFileVerifierComponent,
      },
      {
        path: 'grade-entry-agents',
        component: GradeEntryAgentComponent,
      },
      {
        path: 'add-grade-entry-agent',
        component: AddGradeEntryManagerComponent,
      },
      {
        path: 'system-managers',
        component: SystemManagerComponent,
      },
      {
        path: 'add-system-manager',
        component: AddSystemManagerComponent,
      },
      {
        path: 'admins',
        component: AdminComponent,
      },
      {
        path: 'add-admin',
        component: AddAdminComponent,
      },
      
    ],
  },
];
