import { StudentNavItem } from './nav-item/student-nav-item';

export const navItems: StudentNavItem[] = [
  {
    navCap: 'Principale',
  },
  {
    displayName: 'Tableau de Bord',
    iconName: 'layout-dashboard',
    route: 'student/dashboard',
  },
  {
    navCap: 'Inscriptions',
  },
  {
    displayName: 'Ecrit',
    iconName: 'folder',
    route: 'student/inscription-ecrit/1',
  },
  {
    displayName: 'TIPE',
    iconName: 'folder',
    route: 'student/inscription-oral/1',
  },
  
];
