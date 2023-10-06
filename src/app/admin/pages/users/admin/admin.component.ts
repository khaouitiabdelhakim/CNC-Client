import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  //students: any[]; // Use an array to store the students
  admins : any[]; // Use an array to store the students

  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.adminService.getAllAdmins().subscribe(
      (data: any) => {
        // Assuming the response contains an array of students
        this.admins = data; // Store the array of students
        console.log("valid students retrieved with success");
      },
      (error) => {
        console.error('Error accessing valid students:', error);
      }
    );

    
  }

}
