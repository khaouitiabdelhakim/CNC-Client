import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ecrit1 } from 'src/app/models/ecrit-1';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-inscription-ecrit-etape1',
  templateUrl: './inscription-ecrit-etape1.component.html',
  styleUrls: ['./inscription-ecrit-etape1.component.css']
})
export class InscriptionEcritEtape1Component {

  dossier : Ecrit1;
  formattedDate: string; // Add this property


  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private studentService: StudentServiceService) {
    this.dossier = new Ecrit1();
  }

  ngOnInit(): void {
  

    this.studentService.getSavedInfoOfPost1().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.dossier = data; // Store the array of students
        this.formattedDate = this.dossier.dateDeNaissance.substring(0, 10); // Format the date
        this.dossier.dateDeNaissance = this.formattedDate;
        console.log("saved data retrieved with success", this.dossier);

      },
      (error) => {
        console.error('Error accessing saved data:', error);
      }
    );
  }

  onSubmit() {
    this.studentService.postulateOne(this.dossier).subscribe(
      (response) => {
        // Handle successful registration response (e.g., redirect to a success page).
        console.log('Postulate 1 successful', response);
        // Redirect to another page on success (e.g., login page)
        this.router.navigate(['/student/inscription-ecrit/2']); // Replace '/login' with the desired URL
     
      },
      (error) => {
        console.error('Postulate 1 error', error);
      }
    );
  }

}
