import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CncServiceService } from 'src/app/cnc-service.service';
import { GradeEntryAgentServiceService } from 'src/app/services/grade-entry-agent-service.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent {

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private gradeEntryAgentService: GradeEntryAgentServiceService,
    private cncService: CncServiceService) {}

    subjects: any[];
    message = ""
    messageSuccess = ""
    estCSVfound = '';

    dataToSend : { [key: string]: { [subject: string]: number } } = {};

    submitAllNotesATOnce(): void {

      // Loop through the dataToSend object and call onSubmit for each student
      for (const studentCIN in this.dataToSend) {
        if (this.dataToSend.hasOwnProperty(studentCIN)) {
          const formData = this.dataToSend[studentCIN];
          //this.onSubmit(studentCIN, formData);
          console.log(formData);
          this.gradeEntryAgentService.setNotesFromCIN(studentCIN, formData)
      .subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          // Handle success (e.g., show a success message)
          console.log('succes: ',formData)
          console.log(this.message);
          if (this.message.length == 0) {
            this.messageSuccess = "la saisie des notes est effectueé avec succès"
          }

        },
        (error) => {
          console.error('Error submitting form:', error);
          // Handle error (e.g., show an error message)
          this.message += ' ' + studentCIN +', ';
          console.log(this.message);

        }
        
      );
        }
      }
    }


    handleFileInput(event: any): void {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          const content = reader.result as string;
          this.processCSVContent(content);
        };
  
        reader.readAsText(file);
      }
    }
  
    processCSVContent(content: string): void {
      const lines = content.split('\n');

      if(lines.length > 0) {this.estCSVfound = 'true'}
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.length === 0) {
          continue; // Skip empty lines
        }
        const values = line.split(',');
        const CIN = values[0].trim();
    
        // Initialize the dataToSend object for the student if not already done
        if (!this.dataToSend[CIN]) {
          this.dataToSend[CIN] = {};
        }
    
        // Extract other subject values as needed and add them to dataToSend
        for (let j = 1; j < values.length; j++) {
          const subjectName = this.subjects[j - 1].matiere;
          const subjectValue = parseFloat(values[j].trim());
          this.dataToSend[CIN][subjectName] = subjectValue;
        }
      }
    }
    
    

    onSubmit(formData?: any): void {
      // Your form submission logic here
      // You can use formData to submit data from the CSV row
    
    }
    

  

  filieres: any[]; // 
  centres: any[]; // 
  students: any[]; // Use an array to store the students

  goToEnterMarks(studentId: number) {
    this.router.navigate(['grade-entry-agent/enter-marks', studentId]);
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

    this.gradeEntryAgentService.getAllStudentsWithoutNotes().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.students = data; // Store the array of students
        console.log("from GEA students retrieved with success");
      },
      (error) => {
        console.error('from GEA Error accessing  students:', error);
      }
    );
  }
}
