import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service.service';

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

export interface statisticsChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

export interface monthlyChart {
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

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

// ecommerce card
interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  rprice: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppDashboardComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  public salesOverviewChart!: Partial<salesOverviewChart> | any;
  public generalChart!: Partial<statisticsChart> | any;
  public studentsChart!: Partial<statisticsChart> | any;
  public yearlyChart!: Partial<statisticsChart> | any;
  public monthlyChart!: Partial<monthlyChart> | any;

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

  // ecommerce card
  productcards: productcards[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/s4.jpg',
      title: 'Boat Headphone',
      price: '285',
      rprice: '375',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/s5.jpg',
      title: 'MacBook Air Pro',
      price: '285',
      rprice: '375',
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/s7.jpg',
      title: 'Red Valvet Dress',
      price: '285',
      rprice: '375',
    },
    {
      id: 4,
      imgSrc: '/assets/images/products/s11.jpg',
      title: 'Cute Soft Teddybear',
      price: '285',
      rprice: '375',
    },
  ];

  constructor(private adminService: AdminServiceService) {
    // sales overview chart
    this.salesOverviewChart = {
      series: [
        {
          name: 'Candidats Réguliers',
          data: [2355, 1390, 1300, 750, 490],
          color: '#fc03ec',
        },
        {
          name: 'Candidats Libres',
          data: [80, 50, 35, 15, 50],
          color: '#03e8fc',
        },
      ],

      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '20%', borderRadius: [4] },
      },
      chart: {
        type: 'bar',
        height: 390,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: '#adb0bb',
        fontFamily: 'inherit',
        sparkline: { enabled: false },
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      legend: { show: false },
      xaxis: {
        type: 'category',
        categories: [
          'MP',
          'PSI',
          'TSI',
          'ECS',
          'ECT',
        ],
        labels: {
          style: { cssClass: 'grey--text lighten-2--text fill-color' },
        },
      },
      yaxis: {
        show: true,
        min: 0,
        max: 3000,
        tickAmount: 4,
        labels: {
          style: {
            cssClass: 'grey--text lighten-2--text fill-color',
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        lineCap: 'butt',
        colors: ['transparent'],
      },
      tooltip: { theme: 'light' },

      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 3,
              },
            },
          },
        },
      ],
    };

    // yearly breakup chart
    this.yearlyChart = {
      series: [38, 40, 25],

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
            size: '75%',
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

    // general statictics
    this.generalChart = {
      series: [38, 40, 25,12,15],

      chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 130,
      },
      colors: ['#fcba03', '#5afc03', '#03e8fc',"#fc03f0","#fc0330"],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '75%',
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

    // general statictics about candidats
    this.studentsChart = {
      series: [38, 40],

      chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 130,
      },
      colors: ['#fcba03', '#03e8fc'],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '75%',
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

    // mohtly earnings chart
    this.monthlyChart = {
      series: [
        {
          name: '',
          color: '#49BEFF',
          data: [25, 66, 20, 40, 12, 58, 20],
        },
      ],

      chart: {
        type: 'area',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 60,
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        colors: ['#E8F7FF'],
        type: 'solid',
        opacity: 0.05,
      },
      markers: {
        size: 0,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };
  }


  adminContent: string;

  ngOnInit(): void {
    this.adminService.getAdminDashboard().subscribe(
      (data: any) => {
        this.adminContent = data['username']; // You can display or use the data here as needed
      },
      (error) => {
        console.error('Error accessing admin content:', error);
      }
    );
  }
}
