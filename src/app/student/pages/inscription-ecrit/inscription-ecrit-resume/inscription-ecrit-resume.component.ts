import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CncServiceService } from 'src/app/cnc-service.service';
import { Ecrit } from 'src/app/models/ecrit';
import { StudentServiceService } from 'src/app/student-service.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-inscription-ecrit-resume',
  templateUrl: './inscription-ecrit-resume.component.html',
  styleUrls: ['./inscription-ecrit-resume.component.scss']
})

export class InscriptionEcritResumeComponent {

  dossier : Ecrit;
  filieres: any[]; // Use an array to store the students
  centres: any[];

  
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private cncService: CncServiceService,
    private studentService: StudentServiceService) {
    this.dossier = new Ecrit();
  }

  // Function to generate and download the PDF
  generateAndDownloadPDF() {
    const doc = new jsPDF.default(); // Use 'default' property

    // Add student information
    doc.text(`Nom: ${this.dossier.nom}`, 10, 50);
    doc.text(`Prénom: ${this.dossier.prenom}`, 10, 60);
    doc.text(`Email: ${this.dossier.email}`, 10, 70);
    doc.text(`CIN: ${this.dossier.cin}`, 10, 80);
    doc.text(`CPGE: ${this.dossier.centreCpge}`, 10, 90);
    doc.text(`Filière: ${this.dossier.filiere}`, 10, 100);
    doc.text(`Centre CPGE: ${this.dossier.centreCpge}`, 10, 110);

    // Save the PDF as "nom prenom.pdf"
    doc.save(`${this.dossier.nom} ${this.dossier.prenom}.pdf`);
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
  
    this.studentService.getCompleteEcrit().subscribe(
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
