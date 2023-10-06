import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service.service';
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

  constructor(private adminService: AdminServiceService) {}

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
