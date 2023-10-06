import { Component, OnInit } from '@angular/core';
import { navItems } from './system-manager-sidebar-data';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'system-manager-app-sidebar',
  templateUrl: './system-manager-sidebar.component.html',
})
export class SystemManagerSidebarComponent implements OnInit {
  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}
}
