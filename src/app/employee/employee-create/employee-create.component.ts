import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeAddForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute, private api: ApiService,) {

  }

  ngOnInit(): void {
    this.employeeAddForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.pattern("^[a-zA-Z -']+")]],
      department: ["", [Validators.required, Validators.pattern("^[a-zA-Z -']+")]],
      designation: ["", [Validators.required, Validators.pattern("^[a-zA-Z -']+")]],
      phone: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.employeeAddForm.controls;
  }

  public onSubmit() {
    if (this.employeeAddForm.invalid) {
      return;
    }
    this.api.addEmployee(this.employeeAddForm.value).subscribe((employees) => {
      this.router.navigate(["/"]);
    });
  }

  public backEmployeeListing() {
    this.router.navigate(["/"]);
  }
}
