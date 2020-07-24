import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient, private router: Router) { }

 
  URI: string = `https://apinomina.herokuapp.com`


  signIn(user){
    return this.http.post<any>(this.URI + "/api/auth/signin", user)
  }

  signUp(user){
    return this.http.post<any>(this.URI + "/api/auth/signup", user)
  }


  getToken(): string{
    return localStorage.getItem("token")
  }

  isLoged():boolean{
    if( localStorage.getItem("token") ) {return true}
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate(["/signin"])
  }
}
