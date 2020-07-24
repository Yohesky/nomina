import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service"
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth: AuthService, private employeeS: EmployeeService) { }
  employees: Employee[]
  
  
  
  ngOnInit() {
    this.getEmployees()
  }

  getEmployees() {
    this.employeeS.employees()
      .subscribe(res => {
      this.employees = res
        console.log(this.employees);

      }, err => console.log(err))
  }

  loged(): boolean{
    return this.auth.isLoged()
  }

  out(){
    this.auth.logout()
  }

  filter(event){
    const val = event.target.value
    const employees = document.getElementById("employees")
    employees.innerHTML = ''
    
    
    const lowerCase = val.toLowerCase()
    console.log(lowerCase);
    
 
    this.employees.forEach(employee => {
      
      const name = employee.name.toLowerCase()
      if(name.indexOf(lowerCase) !== -1){
        
         employees.innerHTML += `
         <div class="alert alert-success alert-dismissible fade show" role="alert">
            <div class="row">
                <div class="col-md-2">
                   <strong>  ${employee.name} </strong>  <strong>  ${employee.secondName} </strong> 
                </div>

                <div class="col-md-10">
                  <a href="/employee/${employee._id}" class="btn btn-success">Ver Empleado</a>
                </div>

                
            </div>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
         `
      }


      if(val === ''){
        employees.innerHTML = ``
     }
    })

    
   }

}
