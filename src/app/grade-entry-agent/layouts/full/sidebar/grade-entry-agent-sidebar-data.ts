import { GradeEntryAgentNavItem } from './nav-item/grade-entry-agent-nav-item';

export const navItems: GradeEntryAgentNavItem[] = [
  {
    navCap: 'Principale',
  },
  {
    displayName: 'Tableau de Bord',
    iconName: 'layout-dashboard',
    route: 'grade-entry-agent/dashboard',
  },
  {
    navCap: 'Notes',
  },
  {
    displayName: 'Saisie De Notes',
    iconName: 'user',
    route: 'grade-entry-agent/marks',
  },
  {
    displayName: 'Notes Saisie',
    iconName: 'user',
    route: 'grade-entry-agent/right-marks',
  },
  {
    displayName: 'Notes Erronés',
    iconName: 'user',
    route: 'grade-entry-agent/wrong-marks',
  },  
];
