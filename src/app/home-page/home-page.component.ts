import { Component } from '@angular/core';
import { CncServiceService } from '../cnc-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  notices: any[]; 

  constructor(private generalService: CncServiceService,
    private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit method is being called');
    this.generalService.getAllActualities().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.notices = data; // Store the array of students
        console.log("notices retrieved with success");
      },
      (error) => {
        console.error('Error accessing valid notices:', error);
      }
    );
  }

  getPdfDownloadUrl(pdfUrl: string): string {
    // Construct the URL for downloading the PDF file
    return `http://localhost:8081/api/general/files/${pdfUrl}`;
  }
  

}



