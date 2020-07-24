import { Component, OnInit, Output } from '@angular/core';
import { EmployeeService } from "../../../services/employee.service"
import { Employee } from 'src/app/interfaces/employee';
import { Router } from '@angular/router';

declare var jsPDF: any;
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private employeeS: EmployeeService, private router: Router) { }

  

  employees: Employee[];
  sum: number
  
  ngOnInit() {
    this.getEmployees()
  }

  getEmployees() {
    this.employeeS.employees()
      .subscribe(res => {
      this.employees = res
        console.log(this.employees);
        this.calculate()

      }, err => console.log(err))
  }

  ver(id: string) {
    this.router.navigate([`/employee/${id}`])
  }

  delete(id: string): void {
    this.employeeS.deleteEmployee(id)
      .subscribe(res => {

        this.getEmployees()

      }, err => console.error(err))

  }

  calculate() {
    this.sum = 0
    this.employees.forEach(payment => {
      this.sum += payment.pay
    })
  }

 

  updatingPay(id: string, employee: Employee) {
    this.employeeS.updatePay(id, employee)
      .subscribe(res => {
        console.log(res)
        this.getEmployees()
      }, err => console.error(err))

  }

  downloadPDF() {
    let doc = new jsPDF('p', 'pt');
    doc.autoTable({html: '#data'}) 
    doc.save('nomina.pdf')
  }

  
}
