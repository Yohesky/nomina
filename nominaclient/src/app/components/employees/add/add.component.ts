import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms"
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private employeeS: EmployeeService) { }

  employee: Employee = {
    
  }

  ngOnInit() {
  }

  addEmployee(employee: NgForm){
    this.employeeS.add(employee.value)
    .subscribe(res => 
      {
        console.log(res)
        employee.resetForm()
      }, err => console.error(err))
  }
}
