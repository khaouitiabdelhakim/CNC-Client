import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CncServiceService } from 'src/app/cnc-service.service';
import { Ecrit } from 'src/app/models/ecrit';
import { FileVerifierServiceService } from 'src/app/services/file-verifier-service.service';

@Component({
  selector: 'app-verify-file',
  templateUrl: './verify-file.component.html',
  styleUrls: ['./verify-file.component.scss']
})
export class VerifyFileComponent {


  dossier : Ecrit;
  filieres: any[]; // Use an array to store the students
  centres: any[];

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private cncService: CncServiceService,
    private fileverifierService: FileVerifierServiceService) {
    this.dossier = new Ecrit();
  }

  ngOnInit(): void {

    this.cncService.getAllSectors().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.filieres = data; // Store the array of students
        console.log("filieres retrieved with success");
      },
      (error) => {
        console.error('Error accessing filieres:', error);
      }
    );

    this.cncService.getAllCentres().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.centres = data; // Store the array of students
        console.log("centres retrieved with success");
      },
      (error) => {
        console.error('Error accessing centres:', error);
      }
    );
  
    // Retrieve the student ID parameter from the route
    var studentId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Now, you can use this.studentId in your component as needed

    this.fileverifierService.seeFolder(studentId).subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.dossier = data; // Store the array of students
        console.log("saved data retrieved with success", this.dossier);

      },
      (error) => {
        console.error('Error accessing saved data:', error);
      }
    );
  }

  validateDossier() {
    var studentId = Number(this.route.snapshot.paramMap.get('id'));
    this.fileverifierService.validateDossierEcrit(studentId).subscribe(
      (response) => {
        // Handle successful registration response (e.g., redirect to a success page).
        console.log('validation of folder successful', response);
        // Redirect to another page on success (e.g., login page)
        this.router.navigate(['/file-verifier/ecrit/files']); // Replace '/login' with the desired URL
     
      },
      (error) => {
        console.error('validation of folder  error', error);
      }
    );
  }



}
