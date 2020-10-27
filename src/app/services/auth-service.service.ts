import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {


  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    // tslint:disable-next-line: max-line-length
    if (localStorage.getItem('UserID') && localStorage.getItem('UserName') && localStorage.getItem('Role')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}