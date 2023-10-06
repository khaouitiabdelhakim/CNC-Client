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
import { InscriptionOralEtape1Component } from '../inscription-oral/inscription-oral-etape1/inscription-oral-etape1.component';
import { InscriptionOralEtape2Component } from '../inscription-oral/inscription-oral-etape2/inscription-oral-etape2.component';
import { InscriptionOralEtape3Component } from './inscription-oral-etape3/inscription-oral-etape3.component';

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
    InscriptionOralEtape1Component,
    InscriptionOralEtape2Component,
    InscriptionOralEtape3Component
  ],
})
export class UicomponentsModule {}
