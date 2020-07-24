import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  
  URI = `https://apinomina.herokuapp.com`

  add(employee: Employee){
    return this.http.post(this.URI + "/saveEmployee", employee)
  }

  employees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.URI + '/employees')
  }

  employee(id: string):Observable<Employee[]>{
    return this.http.get<Employee[]>(this.URI + `/employee/${id}`)
  }

  deleteEmployee(id:string){
    return this.http.delete(this.URI + `/deleteEmployee/${id}`)
  }

  updateEmployee(id: string, employee: Employee){
    return this.http.put(this.URI + `/updateEmployee/${id}`, employee)
  }

  updatePay(id: string, employee: Employee){
    return this.http.put(this.URI + `/updatePay/${id}`, employee)
  }
}
