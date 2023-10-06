import { Component, OnInit } from '@angular/core';
import { navItems } from './file-verifier-sidebar-data';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'file-verifier-app-sidebar',
  templateUrl: './file-verifier-sidebar.component.html',
})
export class FileVerifierSidebarComponent implements OnInit {
  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}
}
