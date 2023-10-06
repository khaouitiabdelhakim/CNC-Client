import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service.service';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  //students: any[]; // Use an array to store the students
  valid_students: any[]; // Use an array to store the students
  invalid_students: any[]; // Use an array to store the students

  comptes: User[];
    message = ""
    messageSuccess = ""
    estCSVfound = '';

    cins: string[];
    message2 = ""
    messageSuccess2 = ""
    estCSVfound2 = '';

  constructor(private adminService: AdminServiceService,
    private authenticationService: AuthenticationServiceService) {}


  createAllAccountsATOnce(): void {
    console.log(this.comptes)

    // Loop through the dataToSend object and call onSubmit for each student
    for (let i = 0; i < this.comptes.length; i++ ) {
      console.log(this.comptes[i]);

      this.authenticationService.signUp(this.comptes[i]).subscribe(
        (response) => {
          // Handle successful registration response (e.g., redirect to a success page).
          if (this.message.length == 0) {
            this.messageSuccess = "la création des comptes est effectueé avec succès"
          }
          // Redirect to another page on success (e.g., login page)
          //this.router.navigate(['/authentication/login']); // Replace '/login' with the desired URL
       
        },
        (error) => {
          if (error.error && error.error.message) {
          }
          this.message += this.comptes[i].cin + ' ';
          console.log(this.message);
          console.error('Registration error', error);
        }
      );
    }
  }

  validateAllAccountsATOnce(): void {
    console.log(this.cins)

    // Loop through the dataToSend object and call onSubmit for each student
    for (let i = 0; i < this.cins.length; i++ ) {
      console.log(this.cins[i]);

      this.adminService.validateFromCIN(this.cins[i]).subscribe(
        (response) => {
          // Handle successful registration response (e.g., redirect to a success page).
          if (this.message.length == 0) {
            this.messageSuccess2 = "la validation des comptes est effectueé avec succès"
          }
          // Redirect to another page on success (e.g., login page)
          //this.router.navigate(['/authentication/login']); // Replace '/login' with the desired URL
       
        },
        (error) => {
          if (error.error && error.error.message) {
          }
          this.message2 += this.cins[i] + ' ';
          console.log(this.message);
          console.error('Registration error', error);
        }
      );
    }
  }


  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = reader.result as string;
        this.processCSVContent(content);
      };

      reader.readAsText(file);
    }
  }

  handleFileInput2(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = reader.result as string;
        this.processCSVContent2(content);
      };

      reader.readAsText(file);
    }
  }

  processCSVContent2(content: string): void {
    const lines = content.split('\n');
  
    if (lines.length > 0) {
      this.estCSVfound2 = 'true';
    }
  
    this.cins = []; // Initialize the 'comptes' array
  
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.length === 0) {
        continue; // Skip empty lines
      }
      const values = line.split(',');
  
      // Create a new User object and populate its properties
      const cin = values[0].trim();

      // Add the user to the 'comptes' array
      this.cins.push(cin);
    }
  }

  processCSVContent(content: string): void {
    const lines = content.split('\n');
  
    if (lines.length > 0) {
      this.estCSVfound = 'true';
    }
  
    this.comptes = []; // Initialize the 'comptes' array
  
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.length === 0) {
        continue; // Skip empty lines
      }
      const values = line.split(',');
  
      // Create a new User object and populate its properties
      const user = new User();
      user.cin = values[0].trim();
      user.email = values[1].trim();
      user.password = values[2].trim();
      user.role = 'STUDENT';

      // Add the user to the 'comptes' array
      this.comptes.push(user);
    }
  }
  
  
  

  onSubmit(formData?: any): void {
    // Your form submission logic here
    // You can use formData to submit data from the CSV row
  
  }

  onSubmit2(formData?: any): void {
    // Your form submission logic here
    // You can use formData to submit data from the CSV row
  
  }

  ngOnInit(): void {
    this.adminService.getAllValidStudents().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.valid_students = data; // Store the array of students
        console.log("valid students retrieved with success");
      },
      (error) => {
        console.error('Error accessing valid students:', error);
      }
    );

    this.adminService.getAllInValidStudents().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.invalid_students = data; // Store the array of students
        console.log("invalid students retrieved with success");
      },
      (error) => {
        console.error('Error accessing invalid students:', error);
      }
    );
  }

  validate(studentId: number) {

    // Send a POST request to the API
    this.adminService.validate(studentId).subscribe(
      (response) => {
        // Handle success (if needed)
        console.log('Dossier successful', response);
      },
      (error) => {
        // Handle error (if needed)
        console.error('Dossier error', error);
      }
    );
  }
}
