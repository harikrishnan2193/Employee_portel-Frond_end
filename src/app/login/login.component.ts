import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { AdminapiService } from '../services/adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  email:string=""
  password:string=""

  constructor(private api:AdminapiService, private router:Router){}

  login(){
    if(!this.email || !this.password){
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Please Fill The Form Completely!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
    else{
      

      this.api.authorization().subscribe({
        next:(res:any)=>{
          const { email, password } = res
          if(email === this.email && password === this.password){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Login Successfull",
              showConfirmButton: false,
              timer: 2000
            });
            //navigate
            this.router.navigateByUrl('dashboard')
          }
          else{
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "invalid e-mail or password",
              showConfirmButton: false,
              timer: 2000
            });
          }
        },
        error:(res:any)=>{
          console.log(res);
          
        }
      })
    }
  }

}
