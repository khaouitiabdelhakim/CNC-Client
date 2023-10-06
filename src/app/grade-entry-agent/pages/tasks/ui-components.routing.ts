import { Routes } from '@angular/router';
import { MarksComponent } from './marks/marks.component';
import { WrongMarksComponent } from './wrong-marks/wrong-marks.component';
import { RightMarksComponent } from './right-marks/right-marks.component';
import { EnterMarksComponent } from './enter-marks/enter-marks.component';

// ui


export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'marks',
        component: MarksComponent,
      },
      {
        path: 'right-marks',
        component: RightMarksComponent,
      },
      {
        path: 'wrong-marks',
        component: WrongMarksComponent,
      },
      {
        path: 'enter-marks/:id',
        component: EnterMarksComponent,
      },
    ],
  },
];
