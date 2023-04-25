import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/authservice/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuardGuard implements CanActivate {
  constructor(private authservice:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn=this.authservice.isAuthentication();
      if (isLoggedIn){
        return true;
      } else {
        this.router.navigate(['/StudentsDetails']);
      }
      alert('only admin can access this \n Login as Admin');
      return false;
      }
  
}
