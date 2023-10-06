import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  user: User;
  registrationError: string = ''; // Initialize the error message

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private authenticationService: AuthenticationServiceService
  ) {
    this.user = new User();
  }

  signIn() {
    this.authenticationService.signIn(this.user).subscribe(
      (response: any) => {
        // Handle successful login response.
        console.log('Login successful', response);
  
        // Extract the user's roles from the response
        const roles = response.roles;
  
        // Check the user's roles and navigate accordingly
        if (roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin/dashboard']); // Navigate to the admin dashboard
        } else if (roles.includes('ROLE_STUDENT')) {
          this.router.navigate(['/student/dashboard']); // Navigate to the student dashboard
        } else if (roles.includes('ROLE_FILE_VERIFIER')) {
          this.router.navigate(['/file-verifier/dashboard']); // Navigate to the file verifier dashboard
        } else if (roles.includes('ROLE_GRADE_ENTRY_AGENT')) {
          this.router.navigate(['/grade-entry-agent/dashboard']); // Navigate to the file verifier dashboard
        } else if (roles.includes('ROLE_SYSTEM_MANAGER')) {
          this.router.navigate(['/system-manager/dashboard']); // Navigate to the file verifier dashboard
        }else {
          console.error('Unknown role(s):', roles);
        }
      },
      (error) => {
        if (error.error && error.error.message) {
          // Set the error message to be displayed to the user
          this.registrationError = error.error.message;
        } else {
          // Handle other types of errors, or display a generic error message
          this.registrationError = 'An error occurred during login.';
        }
        console.error('Login error', error);
      }
    );
  }
  
}
