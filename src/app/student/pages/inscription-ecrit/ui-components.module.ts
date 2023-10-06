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
import { InscriptionEcritEtape1Component } from './inscription-ecrit-etape1/inscription-ecrit-etape1.component';
import { InscriptionEcritEtape2Component } from './inscription-ecrit-etape2/inscription-ecrit-etape2.component';
import { InscriptionEcritEtape3Component } from './inscription-ecrit-etape3/inscription-ecrit-etape3.component';
import { InscriptionEcritEtape4Component } from './inscription-ecrit-etape4/inscription-ecrit-etape4.component';
import { InscriptionEcritEtape5Component } from './inscription-ecrit-etape5/inscription-ecrit-etape5.component';
import { InscriptionEcritEtape6Component } from './inscription-ecrit-etape6/inscription-ecrit-etape6.component';
import { InscriptionEcritResumeComponent } from './inscription-ecrit-resume/inscription-ecrit-resume.component';

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
    InscriptionEcritEtape1Component,
    InscriptionEcritEtape2Component,
    InscriptionEcritEtape3Component,
    InscriptionEcritEtape4Component,
    InscriptionEcritEtape5Component,
    InscriptionEcritEtape6Component,
    InscriptionEcritResumeComponent,
  ],
})
export class UicomponentsModule {}
