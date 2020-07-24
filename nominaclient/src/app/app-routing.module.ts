import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './components/employees/read/read.component';
import { AddComponent } from './components/employees/add/add.component';
import { ReadoneComponent } from './components/employees/readone/readone.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  {path: '', redirectTo: "employees", pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'employees', component: ReadComponent, canActivate: [AuthGuardGuard]},
  {path: 'addEmployee', component: AddComponent},
  {path: 'employee/:id', component: ReadoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
