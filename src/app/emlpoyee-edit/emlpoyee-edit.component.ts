import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../employee_module';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiService } from '../services/adminapi.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-emlpoyee-edit',
  templateUrl: './emlpoyee-edit.component.html',
  styleUrls: ['./emlpoyee-edit.component.css']
})
export class EmlpoyeeEditComponent implements OnInit {
  employee:employeeModel ={}

  constructor(private route:ActivatedRoute , private api:AdminapiService , private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      console.log(res.id);
      const {id} =res
      this.viewEmployee(id)
      
    })
  }

  viewEmployee(id:string){
    this.api.viewEmployeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.employee=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  editEmployee(id:any){
    this.api.updateEmployeeApi(id,this.employee).subscribe({
      next:(res:any)=>{
        console.log(res);
        Swal.fire({
          icon:"info",
          text:"Successfully added"
         });
         this.router.navigateByUrl('/employees')
      },
      error(err:any){
        console.log(err);
        
      }
    })
    
  }

  Cancelbutton(id:any){
    this.viewEmployee(id)
  }
  

}
