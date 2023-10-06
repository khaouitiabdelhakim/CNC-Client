import { Component, Input, OnChanges } from '@angular/core';
import { GradeEntryAgentNavItem} from './grade-entry-agent-nav-item';
import { Router } from '@angular/router';
import { NavService } from '../../../../services/nav.service';

@Component({
  selector: 'grade-entry-agent-app-nav-item',
  templateUrl: './grade-entry-agent-nav-item.component.html',
  styleUrls: [],
})
export class GradeEntryAgentAppNavItemComponent implements OnChanges {
  @Input() item: GradeEntryAgentNavItem | any;
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

  onItemSelected(item: GradeEntryAgentNavItem) {
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
