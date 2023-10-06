import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CncServiceService } from 'src/app/cnc-service.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent {

  
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

  updateNotice(pdfUrl: string): void {
    // Construct the URL for downloading the PDF file
    return;
  }

}
