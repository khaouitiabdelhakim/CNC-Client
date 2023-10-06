import { Routes } from '@angular/router';
import { VerifyFileComponent } from './verify-file/verify-file.component';
import { VerifyTipeComponent } from './verify-tipe/verify-tipe.component';
import { VerifiedFilesComponent } from './verified-files/verified-files.component';
import { VerifiedTipesComponent } from './verified-tipes/verified-tipes.component';
import { FilesOralComponent } from './files-oral/files-oral.component';
import { FilesEcritComponent } from './files-ecrit/files-ecrit.component';

// ui


export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ecrit/files',
        component: FilesEcritComponent,
      },

      {
        path: 'oral/files',
        component: FilesOralComponent,
      },
      
      {
        path: 'verify-file/:id',
        component: VerifyFileComponent,
      },
      {
        path: 'verify-tipe/:id',
        component: VerifyTipeComponent,
      },
      {
        path: 'verified-files',
        component: VerifiedFilesComponent,
      },
      {
        path: 'verified-tipes',
        component: VerifiedTipesComponent,
      },
    ],
  },
];
