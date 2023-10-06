import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-system-manager',
  templateUrl: './system-manager.component.html',
  styleUrls: ['./system-manager.component.scss']
})
export class SystemManagerComponent {
  
  //students: any[]; // Use an array to store the students
  system_managers : any[]; // Use an array to store the students

  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.adminService.getAllSystemManagers().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.system_managers = data; // Store the array of students
        console.log("valid students retrieved with success");
      },
      (error) => {
        console.error('Error accessing valid students:', error);
      }
    );

    
  }
}
