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
import { VerifiedFilesComponent } from './verified-files/verified-files.component';
import { VerifiedTipesComponent } from './verified-tipes/verified-tipes.component';
import { VerifyFileComponent } from './verify-file/verify-file.component';
import { VerifyTipeComponent } from './verify-tipe/verify-tipe.component';
import { FilesEcritComponent } from './files-ecrit/files-ecrit.component';
import { FilesOralComponent } from './files-oral/files-oral.component';

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
    VerifiedFilesComponent,
    VerifiedTipesComponent,
    VerifyFileComponent,
    VerifyTipeComponent,
    FilesEcritComponent,
    FilesOralComponent,
  ],
})
export class UicomponentsModule {}
