import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  user: User;
  registrationError: string = ''; // Initialize the error message

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private authenticationService: AuthenticationServiceService
  ) {
    this.user = new User();
    this.user.role = 'STUDENT'; // Set the role here
  }

  onSubmit() {
    this.authenticationService.signUp(this.user).subscribe(
      (response) => {
        // Handle successful registration response (e.g., redirect to a success page).
        console.log('Registration successful', response);
        // Redirect to another page on success (e.g., login page)
        this.router.navigate(['/authentication/login']); // Replace '/login' with the desired URL
     
      },
      (error) => {
        if (error.error && error.error.message) {
          // Set the error message to be displayed to the user
          this.registrationError = error.error.message;
        } else {
          // Handle other types of errors, or display a generic error message
          this.registrationError = 'An error occurred during registration.';
        }
        console.error('Registration error', error);
      }
    );
  }
}
