import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmlpoyeeEditComponent } from './emlpoyee-edit/emlpoyee-edit.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"employees",component:EmployeeListComponent
  },
  {
    path:"employee/add",component:EmployeeAddComponent
  },
  {
    path:"employee/edit/:id",component:EmlpoyeeEditComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
