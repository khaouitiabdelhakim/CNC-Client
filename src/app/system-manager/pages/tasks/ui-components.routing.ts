import { Routes } from '@angular/router';
import { AppDashboardComponent } from '../dashboard/dashboard.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AddActualiteComponent } from './add-actualite/add-actualite.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

// ui


export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'actualities',
        component: ActualiteComponent,
      },
      {
        path: 'upload-actualite',
        component: AddActualiteComponent,
      },
      {
        path: 'file-upload',
        component: FileUploadComponent,
      },
    ],
  },
];
