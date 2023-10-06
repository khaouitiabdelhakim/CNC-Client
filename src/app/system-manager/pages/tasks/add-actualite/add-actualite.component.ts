import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-actualite',
  templateUrl: './add-actualite.component.html',
  styleUrls: ['./add-actualite.component.scss']
})
export class AddActualiteComponent {

  uploadStatus: string = ''; // Initialize uploadStatus as an empty string

  constructor(private http: HttpClient) {}

  uploadFile(coverPhotoInput: any, pdfFileInput: any, title: string) {
    const formData = new FormData();
    formData.append('cover', coverPhotoInput.files[0]);
    formData.append('pdf', pdfFileInput.files[0]);
    formData.append('title', title);

    this.http.post('http://localhost:8081/api/system-manager/uploadAndCreate', formData).subscribe(
      (response) => {
        // Handle the successful upload and creation response here
        this.uploadStatus = 'Upload and creation successful: ' + response;
      },
      (error) => {
        // Handle the upload and creation error here
        this.uploadStatus = 'Upload and creation failed: ' + error.message;
      }
    );
  }


}
