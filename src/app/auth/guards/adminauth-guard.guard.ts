import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuardGuard implements CanActivate,CanLoad {
  constructor(private authservice:AuthenticationService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      console.log("URL"+url);
      return this.Authentication();
    }
  
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.Authentication();
  }

  private Authentication():boolean{
    if(!this.authservice.isUserLogedIn()){
      window.alert("Access not allowed!");
      this.router.navigateByUrl("/Login");
      return false;
    }else{
      return true;
    }
  }
  
}
