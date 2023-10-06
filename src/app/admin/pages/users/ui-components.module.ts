import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { MatNativeDateModule } from '@angular/material/core';
import { StudentComponent } from './student/student.component';
import { FileVerifierComponent } from './file-verifier/file-verifier.component';
import { GradeEntryAgentComponent } from './grade-entry-agent/grade-entry-agent.component';
import { SystemManagerComponent } from './system-manager/system-manager.component';
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddFileVerifierComponent } from './add-file-verifier/add-file-verifier.component';
import { AddGradeEntryManagerComponent } from './add-grade-entry-manager/add-grade-entry-manager.component';
import { AddSystemManagerComponent } from './add-system-manager/add-system-manager.component';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    StudentComponent,
    FileVerifierComponent,
    GradeEntryAgentComponent,
    SystemManagerComponent,
    AdminComponent,
    AddStudentComponent,
    AddAdminComponent,
    AddFileVerifierComponent,
    AddGradeEntryManagerComponent,
    AddSystemManagerComponent
  ],
})
export class UicomponentsModule {}
