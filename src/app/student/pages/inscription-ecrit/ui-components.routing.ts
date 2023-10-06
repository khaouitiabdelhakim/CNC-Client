import { Routes } from '@angular/router';
import { InscriptionEcritEtape1Component } from './inscription-ecrit-etape1/inscription-ecrit-etape1.component';
import { InscriptionEcritEtape2Component } from './inscription-ecrit-etape2/inscription-ecrit-etape2.component';
import { InscriptionEcritEtape3Component } from './inscription-ecrit-etape3/inscription-ecrit-etape3.component';
import { InscriptionEcritEtape4Component } from './inscription-ecrit-etape4/inscription-ecrit-etape4.component';
import { InscriptionEcritEtape5Component } from './inscription-ecrit-etape5/inscription-ecrit-etape5.component';
import { InscriptionEcritEtape6Component } from './inscription-ecrit-etape6/inscription-ecrit-etape6.component';
import { InscriptionEcritResumeComponent } from './inscription-ecrit-resume/inscription-ecrit-resume.component';

// ui


export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '1',
        component: InscriptionEcritEtape1Component,
      },
      {
        path: '2',
        component: InscriptionEcritEtape2Component,
      },
      {
        path: '3',
        component: InscriptionEcritEtape3Component,
      },
      {
        path: '4',
        component: InscriptionEcritEtape4Component,
      },
      {
        path: '5',
        component: InscriptionEcritEtape5Component,
      },
      {
        path: '6',
        component: InscriptionEcritEtape6Component,
      },

      {
        path: 'resume',
        component: InscriptionEcritResumeComponent,
      },
    ],
  },
];
