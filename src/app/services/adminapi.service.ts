import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../employee_module';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  server_URL = 'https://employee-portel-server.onrender.com'

  authorization(){
    return this.http.get(`${this.server_URL}/employee/1`)
  }

  addEmployeeApi(employee:employeeModel){
    return this.http.post(`${this.server_URL}/employee`,employee)
  }

  getAllEmployeeApi(){
    return this.http.get(`${this.server_URL}/employee`)
  }

  deleteEmloyeeApi(id:string){
    return this.http.delete(`${this.server_URL}/employee/${id}`)
  }

  viewEmployeeApi(id:string){
    return this.http.get(`${this.server_URL}/employee/${id}`)
  }

  //to update
  updateEmployeeApi(id:any,employee:any){
    return this.http.put(`${this.server_URL}/employee/${id}`,employee)
  }
}
