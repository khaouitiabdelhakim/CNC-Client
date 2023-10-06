import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CncServiceService } from 'src/app/cnc-service.service';
import { GradeEntryAgentServiceService } from 'src/app/services/grade-entry-agent-service.service';

@Component({
  selector: 'app-wrong-marks',
  templateUrl: './wrong-marks.component.html',
  styleUrls: ['./wrong-marks.component.scss']
})
export class WrongMarksComponent {

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private gradeEntryAgentService: GradeEntryAgentServiceService,
    private cncService: CncServiceService) {
  }
  students: any[];
  filieres: any[]; // 
  centres: any[]; // 

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

    this.gradeEntryAgentService.getAllStudentsWithNotes().subscribe(
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

  goToEnterMarks(studentId: number) {
    this.router.navigate(['grade-entry-agent/enter-marks', studentId]);
  }
}
