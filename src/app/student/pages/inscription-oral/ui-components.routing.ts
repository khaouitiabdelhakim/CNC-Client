import { Routes } from '@angular/router';
import { InscriptionOralEtape1Component } from './inscription-oral-etape1/inscription-oral-etape1.component';
import { InscriptionOralEtape2Component } from './inscription-oral-etape2/inscription-oral-etape2.component';
import { InscriptionOralEtape3Component } from './inscription-oral-etape3/inscription-oral-etape3.component';



export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '1',
        component: InscriptionOralEtape1Component,
      },
      {
        path: '2',
        component: InscriptionOralEtape2Component,
      },
      {
        path: '2',
        component: InscriptionOralEtape3Component,
      },
    ],
  },
];
