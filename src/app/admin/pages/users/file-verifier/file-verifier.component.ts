import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-file-verifier',
  templateUrl: './file-verifier.component.html',
  styleUrls: ['./file-verifier.component.scss']
})
export class FileVerifierComponent {

  //students: any[]; // Use an array to store the students
  file_verifiers : any[]; // Use an array to store the students

  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.adminService.getAllFileVerifiers().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.file_verifiers = data; // Store the array of students
        console.log("valid students retrieved with success");
      },
      (error) => {
        console.error('Error accessing valid students:', error);
      }
    );

    
  }

}
