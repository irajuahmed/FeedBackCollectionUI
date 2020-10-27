import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  public registrationFrom: FormGroup;
  constructor(private formBuilder: FormBuilder, private security: SecurityService, private router: Router) {
    this.registrationFrom = this.formBuilder.group({
      Name: [, [Validators.required]],
      Email: [, [Validators.email]],
      Password: [, [Validators.required]],
    });
  }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }

  register() {
    console.log("click");
    // tslint:disable-next-line: forin
    // for (const v in this.registrationFrom.controls) {

    //   this.registrationFrom.controls[v].markAsTouched();

    // }
    if (this.registrationFrom.valid) {
      const data = {
        UserID: '',
        UserName: this.registrationFrom.controls.Name.value,
        DomainUserName: '',
        Email: this.registrationFrom.controls.Email.value,
        DomainEmail: '',
        Password: this.registrationFrom.controls.Password.value,
        UserFullName: this.registrationFrom.controls.Name.value,
        PasswordAnswer: '',
        UserType: 2
      };
      console.log(data);
      this.security.registration(data).subscribe(response => {
        // boolData = false;
        if (response.status === 'OK') {
          alert(response.message);
          this.router.navigate(['/home']);
        }
        else {
          alert(response.message);
        }
      });
    }
    // console.log()
    // return boolData;
  }
}
