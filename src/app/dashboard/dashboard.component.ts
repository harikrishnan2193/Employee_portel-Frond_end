import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  showSideBar:boolean=true
  employeeCount:number=0

  selected: Date | null = new Date();

  Highcharts: typeof Highcharts = Highcharts;
  profileImage:string = "./assets/images/user.jpg"
  editAdminStatus:boolean=false

  chartOptions = { };

  constructor(private api:AdminapiService){
    this.chartOptions = {
      
    chart: {
      type: 'pie'
  },
  title: {
      text: 'Employee Project Report'
  },
  tooltip: {
      valueSuffix: '%'
  },
  // subtitle: {
  //     text:
  //     'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
  // },
  plotOptions: {
      series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
              enabled: true,
              distance: 20
          }, {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7
              },
              filter: {
                  operator: '>',
                  property: 'percentage',
                  value: 10
              }
          }]
      }
  },
  credits:{
    enabled:false
  },
  series: [
      {
          name: 'Project',
          colorByPoint: true,
          data: [
              {
                  name: 'Aseanet',
                  y: 55.02
              },
              {
                  name: 'TwentyFour',
                  sliced: true,
                  selected: true,
                  y: 26.71
              },
              {
                  name: 'Safari',
                  y: 1.09
              },
              {
                  name: 'AseanetNews',
                  y: 15.5
              },
              {
                  name: 'Reporter',
                  y: 1.68
              }
          ]
      }
  ]

    }
    HC_exporting(Highcharts);
  }
  ngOnInit(): void {

    this.totalEmployee()
  }

  menuBar(){
    this.showSideBar=!this.showSideBar
  }

  totalEmployee(){
    this.api.getAllEmployeeApi().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.employeeCount=res.length
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  edit(){
    this.editAdminStatus=true
  }

}
