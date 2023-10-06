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
import { RightMarksComponent } from './right-marks/right-marks.component';
import { WrongMarksComponent } from './wrong-marks/wrong-marks.component';
import { MarksComponent } from './marks/marks.component';
import { EnterMarksComponent } from './enter-marks/enter-marks.component';

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
    RightMarksComponent,
    WrongMarksComponent,
    MarksComponent,
    EnterMarksComponent
  ],
})
export class UicomponentsModule {}
