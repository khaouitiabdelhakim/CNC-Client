import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute, 
    private router: Router, 
    private authenticationService: AuthenticationServiceService
  ) {
  }

  signOut() {
    this.authenticationService.signOut().subscribe(
      (response) => {
        // Handle successful logout response.
        console.log('Log Out successful', response);
  
        // Clear the local storage
        localStorage.clear();
  
        // Navigate to the login page after successful logout
        this.router.navigate(['/authentication/login']);
      },
      (error) => {
        console.error('Log Out error', error);
      }
    );
  }
  
  
  
}
