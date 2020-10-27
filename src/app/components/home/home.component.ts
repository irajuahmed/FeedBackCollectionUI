import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccordionConfig } from 'ngx-bootstrap';
import noUiSlider from 'nouislider';
import { SecurityService } from 'src/app/services/security.service';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class HomeComponent implements OnInit {

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  userName = localStorage.getItem('UserName');
  groups = [];
  postList: any;
  public postFrom: FormGroup;
  public commFrom: FormGroup;
  constructor(private dataApi: SecurityService,private router: Router, private formBuilder: FormBuilder,public datepipe: DatePipe,) {
    this.postFrom = this.formBuilder.group({
      postText: [, [Validators.required]],
    });
    this.commFrom = this.formBuilder.group({
      postText: [, [Validators.required]],
    });
  }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');
    this.getPostData();

  }
  getPostData() {
    this.dataApi.getallpost().subscribe(data => {
      this.postList = data.result;
      data.result.forEach(element => {
        element.userFullName = element.userFullName + ' posted on: '+ this.datepipe.transform(element.actionDate, 'dd-MM-yyyy');
        // element.commentsList.forEach(element1 => {
        //   element1.userFullName = element1.userFullName + ' commented on: '+ this.datepipe.transform(element1.actionDate, 'dd-MM-yyyy');
        // });
      });
      console.log(data);
    })
  }
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }

  post() {
    if (this.postFrom.valid) {
      const data = {
        UserCode: localStorage.getItem('UserID'),
        Post: this.postFrom.controls.postText.value,
      };
      console.log(data);
      this.dataApi.savePost(data).subscribe(response => {
        console.log(response);
        if (response.status === 'OK') {
          alert(response.message);
          this.getPostData();
          this.postFrom.reset()
        }
        else {
          alert(response.message);
          this.getPostData();
        }
      });
    }
  }
  comment(pCode) {
    console.log(pCode);
    if (this.commFrom.valid) {
      const data = {
        UserCode: localStorage.getItem('UserID'),
        Comments: this.commFrom.controls.postText.value,
        PostCode: pCode,
      };
      console.log(data);
      this.dataApi.saveComments(data).subscribe(response => {
        console.log(response);
        if (response.status === 'OK') {
          alert(response.message);
          this.getPostData();
          this.commFrom.reset()
        }
        else {
          alert(response.message);
          this.getPostData();
        }
      });
    }
  }
  like(code){
    console.log(code);
    const data = {
      UserCode: localStorage.getItem('UserID'),
      CommentsCode: code,
      VoteType: 1
    };
    console.log(data);
    this.dataApi.saveVote(data).subscribe(response => {
      console.log(response);
      if (response.status === 'OK') {
        alert(response.message);
        this.getPostData();
      }
      else {
        alert(response.message);
        this.getPostData();
      }
    });
  }
  dislike(code){
    console.log(code);
    const data = {
      UserCode: localStorage.getItem('UserID'),
      CommentsCode: code,
      VoteType: 2
    };
    console.log(data);
    this.dataApi.saveVote(data).subscribe(response => {
      console.log(response);
      if (response.status === 'OK') {
        alert(response.message);
        this.getPostData();
      }
      else {
        alert(response.message);
        this.getPostData();
      }
    });
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

