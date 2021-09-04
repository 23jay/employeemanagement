import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component'
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component'

const routes: Routes = [
  {path:'', component:EmployeeComponent},
  {path:'employee', component:EmployeeCreateComponent,children:[{path:':add',component:EmployeeCreateComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
