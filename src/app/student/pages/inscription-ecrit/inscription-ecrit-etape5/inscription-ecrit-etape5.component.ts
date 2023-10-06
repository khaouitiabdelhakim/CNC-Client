import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ecrit5 } from 'src/app/models/ecrit-5';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-inscription-ecrit-etape5',
  templateUrl: './inscription-ecrit-etape5.component.html',
  styleUrls: ['./inscription-ecrit-etape5.component.css']
})
export class InscriptionEcritEtape5Component {
  dossier : Ecrit5;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private studentService: StudentServiceService) {
    this.dossier = new Ecrit5();
  }

  onSubmit() {
    this.studentService.postulateFive(this.dossier).subscribe(
      (response) => {
        // Handle successful registration response (e.g., redirect to a success page).
        console.log('Postulate 5 successful', response);
        // Redirect to another page on success (e.g., login page)
        this.router.navigate(['/student/inscription-ecrit/resume']); // Replace '/login' with the desired URL
     
      },
      (error) => {
        console.error('Postulate 5 error', error);
      }
    );
  }

  
  ngOnInit(): void {
  
    this.studentService.getSavedInfoOfPost5().subscribe(
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

}
