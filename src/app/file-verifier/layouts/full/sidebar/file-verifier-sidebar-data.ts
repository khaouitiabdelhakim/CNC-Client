import { FileVerifierNavItem } from './nav-item/file-verifier-nav-item';

export const navItems: FileVerifierNavItem[] = [
  {
    navCap: 'Principale',
  },
  {
    displayName: 'Tableau de Bord',
    iconName: 'layout-dashboard',
    route: 'file-verifier/dashboard',
  },
  {
    navCap: 'Dossiers',
  },
  {
    displayName: 'Vérifier Dossier Ecrit',
    iconName: 'folder-question',
    route: 'file-verifier/ecrit/files',
  },
  {
    displayName: 'Vérifier Dossier  TIPE',
    iconName: 'folder-question',
    route: 'file-verifier/oral/files',
  },
  {
    displayName: 'Dossiers Ecrit Validés',
    iconName: 'folder-check',
    route: 'file-verifier/verified-files',
  },
  {
    displayName: 'TIPEs Validés',
    iconName: 'folder-filled',
    route: 'file-verifier/verified-tipes',
  },
 
  
];
