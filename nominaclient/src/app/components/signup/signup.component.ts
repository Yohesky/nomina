import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms"
import {User} from "../../interfaces/user"
import {AuthService} from "../../services/auth.service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

   User: User = {
     username: "",
     password: ""
   }

   error: string;

 
  ngOnInit() {
  }

  register(user: NgForm){
    this.auth.signUp(user.value)
    .subscribe(res => this.router.navigate(["/employees"]), err => this.error = err.error.msg)
  }
}
