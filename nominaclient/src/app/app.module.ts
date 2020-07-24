import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'

import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddComponent } from './components/employees/add/add.component';

import { ReadComponent } from './components/employees/read/read.component';
import { ReadoneComponent } from './components/employees/readone/readone.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TokenService} from "./services/token.service"
import {AuthGuardGuard} from "./guards/auth-guard.guard"

import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AddComponent,
    ReadComponent,
    ReadoneComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [AuthGuardGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
