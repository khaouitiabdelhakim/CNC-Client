import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CncServiceService } from 'src/app/cnc-service.service';
import { GradeEntryAgentServiceService } from 'src/app/services/grade-entry-agent-service.service';

@Component({
  selector: 'app-enter-marks',
  templateUrl: './enter-marks.component.html',
  styleUrls: ['./enter-marks.component.scss']
})
export class EnterMarksComponent {

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private gradeEntryAgentService: GradeEntryAgentServiceService,
    private cncService: CncServiceService) {
  }

  
  student: any; // Use an array to store the students
  
  successMessage: string | null = null;
  errorMessage: string | null = null;

  subjects: any[];
  formData: any = {}; // Use 'any' type for formData

  // Method to handle form submission
  onSubmit() {
    const dataToSend: { [key: string]: number } = {}; // Use an object, not an array
  
    // Loop through the subjects and add the corresponding formData values
    for (const subject of this.subjects) {
      // Check if the formData value is defined and not null
      if (this.formData[subject.matiere] !== undefined && this.formData[subject.matiere] !== null) {
          dataToSend[subject.matiere] = this.formData[subject.matiere];
      } else {
          // Set a default value of 00.00 for undefined or null formData
          dataToSend[subject.matiere] = 0.00;
      }
  }
  
  
    // Retrieve the student ID parameter from the route
    var studentId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(dataToSend)
  
    this.gradeEntryAgentService.setNotes(studentId, dataToSend)
      .subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          // Handle success (e.g., show a success message)
          this.successMessage = 'Notes enregistrées avec succès';
          this.errorMessage = null;

        },
        (error) => {
          console.error('Error submitting form:', error);
          // Handle error (e.g., show an error message)
          this.errorMessage = 'Erreur lors de l\'enregistrement des notes';
          this.successMessage= null;

        }
      );
  }
  



  ngOnInit(): void {

    // Retrieve the student ID parameter from the route
    var studentId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Now, you can use this.studentId in your component as needed

    this.gradeEntryAgentService.getStudent(studentId).subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.student = data; // Store the array of students
        console.log("saved data retrieved with success", this.student);

      },
      (error) => {
        console.error('Error accessing saved data:', error);
      }
    );

    this.gradeEntryAgentService.getAllSubjects().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.subjects = data; // Store the array of students
        console.log("from GEA subjects retrieved with success");
      },
      (error) => {
        console.error('from GEA Error accessing  subjects:', error);
      }
    );

    
    // Get the student ID from the route
    studentId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the student's notes based on their ID
    this.gradeEntryAgentService.getNotes(studentId).subscribe(
      (notesData) => {
        // Populate the formData object with fetched notes
        for (const subject of this.subjects) {
          const subjectName = subject.matiere;
          this.formData[subjectName] = notesData[subjectName] || 0.0;
        }
      },
      (error) => {
        console.error('Error fetching notes:', error);
        // Handle error (e.g., show an error message)
        this.errorMessage = 'Erreur lors du chargement des notes';
        this.successMessage = null;
      }
    );
    

  }

}
