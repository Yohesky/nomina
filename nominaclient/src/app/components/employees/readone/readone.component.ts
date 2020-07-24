import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import {ActivatedRoute, Router} from "@angular/router"
import { Employee } from 'src/app/interfaces/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-readone',
  templateUrl: './readone.component.html',
  styleUrls: ['./readone.component.css']
})
export class ReadoneComponent implements OnInit {

  constructor(private employeeS: EmployeeService, private router: Router, private AR: ActivatedRoute) { }

  employee: Employee[]

  id: string;
  ngOnInit() {
    this.getid()
    this.getEmployee()
  } 

  getid(){
    this.AR.params.subscribe(params => 
      {this.id = params["id"]  
      console.log(this.id);
        }, 
      err => console.log(err))
  }

  getEmployee(){
    this.employeeS.employee(this.id)
    .subscribe(res => 
      {
      console.log(res)
      this.employee = res
      }
      , err => console.log(err))
  }

  update(formUpdate: NgForm){
    const employee = formUpdate.value
    this.employeeS.updateEmployee(this.id, employee)
    .subscribe(res => 
      {
        console.log(res)
        this.router.navigate(["/employees"])
      }, err => console.error(err))  
  }

}
