import { Component, Input, OnChanges } from '@angular/core';
import { FileVerifierNavItem} from './file-verifier-nav-item';
import { Router } from '@angular/router';
import { NavService } from '../../../../services/nav.service';

@Component({
  selector: 'file-verifier-app-nav-item',
  templateUrl: './file-verifier-nav-item.component.html',
  styleUrls: [],
})
export class FileVerifierAppNavItemComponent implements OnChanges {
  @Input() item: FileVerifierNavItem | any;
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

  onItemSelected(item: FileVerifierNavItem) {
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
