import { Component, OnInit } from '@angular/core';
import { navItems } from './grade-entry-agent-sidebar-data';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'grade-entry-agent-app-sidebar',
  templateUrl: './grade-entry-agent-sidebar.component.html',
})
export class GradeEntryAgentSidebarComponent implements OnInit {
  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}
}
