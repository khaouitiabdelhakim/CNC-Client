import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

 
  registrationError: string = ''; // Initialize the error message
  registrationSucces: String = ''

  
  

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
