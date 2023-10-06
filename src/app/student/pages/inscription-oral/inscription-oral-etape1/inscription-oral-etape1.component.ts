import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ecrit5 } from 'src/app/models/ecrit-5';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-inscription-oral-etape1',
  templateUrl: './inscription-oral-etape1.component.html',
  styleUrls: ['./inscription-oral-etape1.component.scss']
})
export class InscriptionOralEtape1Component {
  dossier : Ecrit5;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private studentService: StudentServiceService) {
    this.dossier = new Ecrit5();
  }

  onSubmit() {
    this.studentService.postulateOralOne(this.dossier).subscribe(
      (response) => {
        // Handle successful registration response (e.g., redirect to a success page).
        console.log('Postulate Oral 1 successful', response);
        // Redirect to another page on success (e.g., login page)
        this.router.navigate(['/student/inscription-oral/2']); // Replace '/login' with the desired URL
     
      },
      (error) => {
        console.error('Postulate Oral 1  error', error);
      }
    );
  }

  
  ngOnInit(): void {
  
    this.studentService.getSavedInfoOfOralPost1().subscribe(
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
