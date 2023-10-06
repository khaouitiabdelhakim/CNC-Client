import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CncServiceService } from 'src/app/cnc-service.service';
import { Ecrit2 } from 'src/app/models/ecrit-2';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-inscription-ecrit-etape2',
  templateUrl: './inscription-ecrit-etape2.component.html',
  styleUrls: ['./inscription-ecrit-etape2.component.css']
})
export class InscriptionEcritEtape2Component {

  dossier : Ecrit2;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private studentService: StudentServiceService,
    private cncService: CncServiceService) {
    this.dossier = new Ecrit2();
  }

  filieres: any[]; // Use an array to store the students
  centres: any[]; // Use an array to store the students

  savedData: any[];

  

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

    this.studentService.getSavedInfoOfPost2().subscribe(
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
    this.studentService.postulateTwo(this.dossier).subscribe(
      (response) => {
        // Handle successful registration response (e.g., redirect to a success page).
        console.log('Postulate 2 successful', response);
        // Redirect to another page on success (e.g., login page)
        this.router.navigate(['/student/inscription-ecrit/3']); // Replace '/login' with the desired URL
     
      },
      (error) => {
        console.error('Postulate 2 error', error);
      }
    );
  }

}
