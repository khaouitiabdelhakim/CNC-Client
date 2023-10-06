import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ecrit4 } from 'src/app/models/ecrit-4';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-inscription-ecrit-etape4',
  templateUrl: './inscription-ecrit-etape4.component.html',
  styleUrls: ['./inscription-ecrit-etape4.component.css']
})
export class InscriptionEcritEtape4Component {

  dossier : Ecrit4;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private studentService: StudentServiceService) {
    this.dossier = new Ecrit4();
  }

  onSubmit() {
    this.studentService.postulateFour(this.dossier).subscribe(
      (response) => {
        // Handle successful registration response (e.g., redirect to a success page).
        console.log('Postulate 4 successful', response);
        // Redirect to another page on success (e.g., login page)
        this.router.navigate(['/student/inscription-ecrit/5']); // Replace '/login' with the desired URL
     
      },
      (error) => {
        console.error('Postulate 4 error', error);
      }
    );
  }

  ngOnInit(): void {
  
    this.studentService.getSavedInfoOfPost4().subscribe(
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
