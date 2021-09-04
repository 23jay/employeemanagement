import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: any;

  constructor(private api: ApiService, private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.loadAllEmployee()
  }
  public loadAllEmployee() {
    this.api.getAllEmployee().subscribe((employees) => {
      this.employeeList = employees.sort((a:any,b:any) => 0 - (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
      
    });
  }

  public AddEmployee() {
    this.router.navigate(["/employee/add"]);
  }
}
