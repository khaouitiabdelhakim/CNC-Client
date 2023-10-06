import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent {
  
  user: User;
  registrationError: string = ''; // Initialize the error message
  registrationSucces: String = ''

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private authenticationService: AuthenticationServiceService
  ) {
    this.user = new User();
    this.user.role = 'ADMIN'; // Set the role here
  }

  signUp() {
    this.authenticationService.signUp(this.user).subscribe(
      (response) => {
        // Handle successful registration response (e.g., redirect to a success page).
        console.log('Registration successful', response);
        this.registrationSucces = 'Registration successful'
        this.registrationError = '';
        // Redirect to another page on success (e.g., login page)
        //this.router.navigate(['/authentication/login']); // Replace '/login' with the desired URL
     
      },
      (error) => {
        this.registrationSucces = ''
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


  togglePasswordVisibility() {
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const passwordVisibilityIcon = document.getElementById("passwordVisibilityIcon");
  
    if (passwordInput && passwordVisibilityIcon) {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordVisibilityIcon.classList.remove("fa-eye");
        passwordVisibilityIcon.classList.add("fa-eye-slash"); // FontAwesome's "eye-slash" icon
      } else {
        passwordInput.type = "password";
        passwordVisibilityIcon.classList.remove("fa-eye-slash");
        passwordVisibilityIcon.classList.add("fa-eye");
      }
    }
  }

  generatePassword() {
    const generatedPassword = this.generateRandomPassword();
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    passwordInput.value = generatedPassword;
    this.user.password = generatedPassword;
  }

  // Function to generate a random password
  generateRandomPassword(): string {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  }
}
