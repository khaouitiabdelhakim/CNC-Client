import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-grade-entry-agent',
  templateUrl: './grade-entry-agent.component.html',
  styleUrls: ['./grade-entry-agent.component.scss']
})
export class GradeEntryAgentComponent {

   //students: any[]; // Use an array to store the students
   grade_entry_agents : any[]; // Use an array to store the students

   constructor(private adminService: AdminServiceService) {}
 
   ngOnInit(): void {
     this.adminService.getAllGradeEntryAgents().subscribe(
       (data: any) => {
         // Assuming the response contains an array of students
         this.grade_entry_agents = data; // Store the array of students
         console.log("valid students retrieved with success");
       },
       (error) => {
         console.error('Error accessing valid students:', error);
       }
     );
 
     
   }

}
