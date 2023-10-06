import { Component } from '@angular/core';
import { FileVerifierServiceService } from 'src/app/services/file-verifier-service.service';

@Component({
  selector: 'app-files-ecrit',
  templateUrl: './files-ecrit.component.html',
  styleUrls: ['./files-ecrit.component.scss']
})
export class FilesEcritComponent {

  //students: any[]; // Use an array to store the students
  students: any[]; // Use an array to store the students

  constructor(private fileverifierService: FileVerifierServiceService) {}

  ngOnInit(): void {
    this.fileverifierService.getStudentsWithInvalidFolders().subscribe(
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

  seeFolder(studentId: number) {

    // Send a POST request to the API
    this.fileverifierService.seeFolder(studentId).subscribe(
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
