import { Component } from '@angular/core';
import { employeeModel } from '../employee_module';
import { AdminapiService } from '../services/adminapi.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  // variable to store the value from the input box which have the same structure of employeeModel
  constructor(private api:AdminapiService){}

  employee:employeeModel={}

  cancelEmployee(){
    this.employee={}
  }


  addEmployee(){
    console.log(this.employee);

    if (!this.employee.name || !this.employee.email || !this.employee.id || !this.employee.status) {
     Swal.fire({
      icon:"info",
      text:"please fill the form compleatily"
     })
    }
    else{
      this.api.addEmployeeApi(this.employee).subscribe({
      next:(res:employeeModel)=>{
        console.log(res);
        
        Swal.fire({
          icon:"success",
          text:"successfully added"
         })
      }
    })
  }
    
  }

  

}
