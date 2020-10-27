import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { ProfilepageComponent } from './pages/examples/profilepage/profilepage.component';
import { RegisterpageComponent } from './pages/examples/registerpage/registerpage.component';
import { LandingpageComponent } from './pages/examples/landingpage/landingpage.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth-service.service';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: IndexComponent },
//   { path: 'profile', component: ProfilepageComponent },
//   { path: 'register', component: RegisterpageComponent },
//   { path: 'landing', component: LandingpageComponent },

//   { path: 'home2', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register2', component: RegistrationComponent },
// ];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    // path: '', component: HomeComponent, canActivate: [AuthService],
    path: '', component: HomeComponent, canActivate: [AuthService],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: '***', component: LoginComponent }

];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
