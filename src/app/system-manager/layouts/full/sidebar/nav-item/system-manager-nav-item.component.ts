import { Component, Input, OnChanges } from '@angular/core';
import { SystemManagerNavItem} from './system-manager-nav-item';
import { Router } from '@angular/router';
import { NavService } from '../../../../services/nav.service';

@Component({
  selector: 'system-manager-app-nav-item',
  templateUrl: './system-manager-nav-item.component.html',
  styleUrls: [],
})
export class SystemManagerAppNavItemComponent implements OnChanges {
  @Input() item: SystemManagerNavItem | any;
  @Input() depth: any;

  constructor(public navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnChanges() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
      }
    });
  }

  onItemSelected(item: SystemManagerNavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }

    // scroll
    document.querySelector('.page-wrapper')?.scroll({
      top: 0,
      left: 0,
    });
  }
}
