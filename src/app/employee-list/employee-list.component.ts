import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { employeeModel } from '../employee_module';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // OnInit is an interface to implement ngOnInit


  allEmployee:employeeModel[]=[]
  
  serchKey:string=""

  // for paginaton
  p : number =1

  constructor(private api:AdminapiService){}

  // lifecycle hook - call just after the component is created and constructer is called
  
  
  ngOnInit(): void {
  
    this.allEmplopyeeDetails()
  }
  
  allEmplopyeeDetails(){
    this.api.getAllEmployeeApi().subscribe({
      next:(res:any)=>{
        // console.log(res);
        
        this.allEmployee=res
        console.log(this.allEmployee);
        
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }


  removeEmployee(id:any){
    this.api.deleteEmloyeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allEmplopyeeDetails()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  sortId(){
    this.allEmployee.sort((a:any,b:any)=>a.id-b.id)
  }

  sortName(){
    this.allEmployee.sort((a:any,b:any)=>a.name.localeCompare(b.name))
  }

  generatePdf(){
    // create a object for js pdf
    const pdf = new jsPDF()

    let head = [['id','Employee name','Email','Status']]

    let body : any = []

    this.allEmployee.filter((item)=>item.id!=='1').forEach((item:any)=>{
      body.push([item.id ,item.name ,item.email ,item.status])
    })

    // fontsize
    pdf.setFontSize(16)
    // title
    pdf.text('Employee Details',10 ,10)
    // table
    autoTable(pdf,{head,body})
    // to open in new tab
    pdf.output('dataurlnewwindow')
    // save and download
    pdf.save('employee.pdf')
  }
  
  
}
