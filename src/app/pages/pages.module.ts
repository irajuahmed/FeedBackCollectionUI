import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { IndexComponent } from './index/index.component';
import { ProfilepageComponent } from './examples/profilepage/profilepage.component';
import { RegisterpageComponent } from './examples/registerpage/registerpage.component';
import { LandingpageComponent } from './examples/landingpage/landingpage.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthService } from '../services/auth-service.service';
import { SecurityService } from '../services/security.service';
import { RegistrationComponent } from '../components/registration/registration.component';
import { AccordionModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  declarations: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  // exports: [
  //   IndexComponent,
  //   ProfilepageComponent,
  //   RegisterpageComponent,
  //   LandingpageComponent
  // ],
  providers: [AuthService, SecurityService, DatePipe]
})
export class PagesModule {}
