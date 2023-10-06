import { SystemManagerNavItem } from './nav-item/system-manager-nav-item';

export const navItems: SystemManagerNavItem[] = [
  {
    navCap: 'Principale',
  },
  {
    displayName: 'Tableau de Bord',
    iconName: 'layout-collage',
    route: 'system-manager/dashboard',
  },
  {
    navCap: 'Management',
  },
  {
    displayName: 'Actualités',
    iconName: 'file-filled',
    route: 'system-manager/actualities',
  },
  {
    displayName: 'Ajouter Une Notice',
    iconName: 'file-description',
    route: 'system-manager/upload-actualite',
  },
  
  
];
