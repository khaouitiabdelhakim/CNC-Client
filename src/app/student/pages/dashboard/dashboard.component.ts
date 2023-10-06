
import { StudentServiceService } from 'src/app/student-service.service';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
} from 'ng-apexcharts';

interface month {
  value: string;
  viewValue: string;
}

export interface salesOverviewChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}

export interface inscriptionChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}



interface stats {
  id: number;
  time: string;
  color: string;
  title?: string;
  subtext?: string;
  link?: string;
}






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class AppDashboardComponent {

  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  public salesOverviewChart!: Partial<salesOverviewChart> | any;
  public inscriptionEcritChart!: Partial<inscriptionChart> | any;
  public inscriptionOralChart!: Partial<inscriptionChart> | any;

  displayedColumns: string[] = ['assigned', 'name', 'priority', 'budget'];
 

  months: month[] = [
    { value: 'mar', viewValue: 'March 2023' },
    { value: 'apr', viewValue: 'April 2023' },
    { value: 'june', viewValue: 'June 2023' },
  ];

  // recent transaction
  stats: stats[] = [
    {
      id: 1,
      time: '09.30 am',
      color: 'primary',
      subtext: 'Payment received from John Doe of $385.90',
    },
    {
      id: 2,
      time: '10.30 am',
      color: 'accent',
      title: 'New sale recorded',
      link: '#ML-3467',
    },
    {
      id: 3,
      time: '12.30 pm',
      color: 'success',
      subtext: 'Payment was made of $64.95 to Michael',
    },
    {
      id: 4,
      time: '12.30 pm',
      color: 'warning',
      title: 'New sale recorded',
      link: '#ML-3467',
    },
    {
      id: 5,
      time: '12.30 pm',
      color: 'error',
      title: 'New arrival recorded',
      link: '#ML-3467',
    },
    {
      id: 6,
      time: '12.30 pm',
      color: 'success',
      subtext: 'Payment Done',
    },
  ];

 

  constructor(private studentService: StudentServiceService) {
   

    // yearly breakup chart
    this.inscriptionEcritChart = {
      series: [25, 75],

      chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 130,
      },
      colors: ['#5D87FF', '#ECF2FF', '#F9F9FD'],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '80%',
            background: 'transparent',
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 991,
          options: {
            chart: {
              width: 120,
            },
          },
        },
      ],
      tooltip: {
        enabled: false,
      },
    };

    //for TIPE

    this.inscriptionOralChart = {
      series: [25, 75],

      chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 130,
      },
      colors: ['#5D87FF', '#ECF2FF', '#F9F9FD'],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '80%',
            background: 'transparent',
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 991,
          options: {
            chart: {
              width: 120,
            },
          },
        },
      ],
      tooltip: {
        enabled: false,
      },
    };

    
  }


  profileNonValide: string = ''; // Declare and initialize the variable
  profileValide: string = '';

  

  ngOnInit() {
    this.studentService.estProfileNonValide().subscribe(
      (result) => {
        if(result == true) {
          this.profileNonValide = '';
          this.profileValide = "Bonjour, votre compte a été validé. Vous pouvez maintenant commencer à remplir votre dossier pour participer au concours CNC.";
        } else {
          this.profileNonValide = "Votre compte est actuellement en cours de vérification par l'administrateur. Vous pourrez postuler au concours CNC dès que votre compte sera validé.";
          this.profileValide = '';
        }
        
        console.log(`Profile Status: ${this.profileNonValide}`);
      },
      (error: any) => {
        // Handle the error here
        console.error('Error:', error);
        this.profileNonValide = "Votre compte est actuellement en cours de vérification par l'administrateur. Vous pourrez postuler au concours CNC dès que votre compte sera validé.";
          this.profileValide = '';
      }
    );
  }
}


