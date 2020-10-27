import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import noUiSlider from 'nouislider';
import { SecurityService } from 'src/app/services/security.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  public loginFrom: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,private security: SecurityService) {
    this.loginFrom = this.formBuilder.group({
      userName: [, [Validators.required]],
      password: [, [Validators.required]],
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
  signIn() {

    // tslint:disable-next-line: forin
    for (const v in this.loginFrom.controls) {

      this.loginFrom.controls[v].markAsTouched();

    }
    if (this.loginFrom.valid) {
      const data = {
        UserName: this.loginFrom.controls.userName.value,
        Password: this.loginFrom.controls.password.value,
      };
      console.log(data);
      this.security.login(data).subscribe(response => {
        console.log(response);
        if (response.message === 'Login Successfully') {
         console.log(response);
         alert(response.message);
         this.success(response.result)
        } else {
          // alert(response.Message);
          console.log(response);
          alert(response.message);
        }
      });
    }
  }
  success(data) {
    console.log('####save');
    localStorage.setItem('UserID', data.userID);
    localStorage.setItem('UserName', data.email);
    localStorage.setItem('Role', data.roles[0].roleName);
    this.router.navigate(['/']);
    // localStorage.setItem('branchIdList', JSON.stringify(data.branchIdList));
  }
}
