import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Principale',
  },
  {
    displayName: 'Tableau de Bord',
    iconName: 'layout-dashboard',
    route: 'admin/dashboard',
  },
  {
    navCap: 'Utilisateurs',
  },
  {
    displayName: 'Étudiants',
    iconName: 'user',
    route: 'admin/users/students',
  },
  {
    displayName: 'Vérificateurs de Dossier',
    iconName: 'user',
    route: 'admin/users/file-verifiers',
  },
  {
    displayName: 'Agents de Saisie de Notes',
    iconName: 'user',
    route: 'admin/users/grade-entry-agents',
  },
  {
    displayName: 'Gestionnaire du Système',
    iconName: 'user',
    route: 'admin/users/system-managers',
  },
  {
    displayName: 'Admins',
    iconName: 'user',
    route: 'admin/users/admins',
  },
  
];
