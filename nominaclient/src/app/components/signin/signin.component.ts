import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import {Router} from "@angular/router"
import {AuthService} from "../../services/auth.service"
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  User: User = {
    username: "",
    password: ""
  }

  token: string;
  error: string;

  ngOnInit() {
  }

  login(user: NgForm){
    this.auth.signIn(user.value)
    .subscribe(
      res => {
        console.log(res)
        this.token = res.token
        localStorage.setItem("token", this.token)
        this.router.navigate(["employees"])
      }, 
      err => this.error = err.error.msg
    )
    
  }

}
