import { Component, OnInit } from '@angular/core';
import { navItems } from './student-sidebar-data';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'student-app-sidebar',
  templateUrl: './student-sidebar.component.html',
})
export class StudentSidebarComponent implements OnInit {
  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}
}
