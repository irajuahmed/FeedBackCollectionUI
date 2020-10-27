import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) {}

  login(data): Observable<any> {
    // tslint:disable-next-line: variable-name
    const _url =  `http://192.168.10.175/brainstation/api/Authentication/Login`;
    return this.http.post<any>(_url, data);
  }
  registration(data): Observable<any> {
    const _url = `http://192.168.10.175/brainstation/api/Authentication/Register`;
    return this.http.post<any>(_url, data);
  }
  savePost(data){
    const _url = `http://192.168.10.175/brainstation/api/Newsfeed/Post`;
    return this.http.post<any>(_url, data);
  }
  saveComments(data){
    const _url = `http://192.168.10.175/brainstation/api/Newsfeed/Comment`;
    return this.http.post<any>(_url, data);
  }
  saveVote(data){
    const _url = `http://192.168.10.175/brainstation/api/Newsfeed/Vote`;
    return this.http.post<any>(_url, data);
  }
  getallpost(): Observable<any> {
    const _url = `http://192.168.10.175/brainstation/api/Newsfeed/GetPostWithDetails`;
    return this.http.get<any>(_url);
  }
}
