import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  uploadStatus: string = ''; // Initialize uploadStatus as an empty string

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // You can store the selected file in a variable or perform other actions here
  }

  uploadFile(fileInput: any) {
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('cover', fileInput.files[1]);

    this.http.post('http://localhost:8081/api/test/upload', formData).subscribe(
      (response) => {
        // Handle the successful upload response here
        this.uploadStatus = 'Upload successful: ' + response;
      },
      (error) => {
        // Handle the upload error here
        this.uploadStatus = 'Upload failed: ' + error.message;
      }
    );
  }

}
