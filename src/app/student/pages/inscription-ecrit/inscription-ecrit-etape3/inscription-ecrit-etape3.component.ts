import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CncServiceService } from 'src/app/cnc-service.service';
import { Ecrit3 } from 'src/app/models/ecrit-3';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-inscription-ecrit-etape3',
  templateUrl: './inscription-ecrit-etape3.component.html',
  styleUrls: ['./inscription-ecrit-etape3.component.css']
})
export class InscriptionEcritEtape3Component {

  dossier : Ecrit3;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private studentService: StudentServiceService,
    private cncService: CncServiceService) {
    this.dossier = new Ecrit3();
  }

  

  filieres: any[]; // Use an array to store the students
  centres: any[]; // Use an array to store the students



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

    this.studentService.getSavedInfoOfPost3().subscribe(
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


  onSubmit() {
    this.studentService.postulateThree(this.dossier).subscribe(
      (response) => {
        // Handle successful registration response (e.g., redirect to a success page).
        console.log('Postulate 3 successful', response);
        // Redirect to another page on success (e.g., login page)
        this.router.navigate(['/student/inscription-ecrit/4']); // Replace '/login' with the desired URL
     
      },
      (error) => {
        console.error('Postulate 3 error', error);
      }
    );
  }

}
