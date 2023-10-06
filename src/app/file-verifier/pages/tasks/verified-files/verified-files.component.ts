import { Component } from '@angular/core';
import { FileVerifierServiceService } from 'src/app/services/file-verifier-service.service';

@Component({
  selector: 'app-verified-files',
  templateUrl: './verified-files.component.html',
  styleUrls: ['./verified-files.component.scss']
})
export class VerifiedFilesComponent {

  //students: any[]; // Use an array to store the students
  students: any[]; // Use an array to store the students

  constructor(private fileverifierService: FileVerifierServiceService) {}

  ngOnInit(): void {
    this.fileverifierService.getStudentsWithValidFolders().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.students = data; // Store the array of students
        console.log("invalid students retrieved with success",this.students);
      },
      (error) => {
        console.error('Error accessing invalid students:', error);
      }
    );
  }


}
