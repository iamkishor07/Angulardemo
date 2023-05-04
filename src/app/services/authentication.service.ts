import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  fakeUsername: string = "username";
  fakePassword: string = "password";
  isLoggedIn!:boolean;
  constructor() { }

  login(username: any, password: any): Observable<any> {

    if(username === this.fakeUsername && password === this.fakePassword){
      this.isLoggedIn=true;
      localStorage.setItem('token',"my-super-secret-token-from-server");
      //setting the access token in localstorage
      return of(new HttpResponse({status:200}));
    }else{
      return of(new HttpResponse({status:401}));

    }
    
  }

  logout():void{
    this.isLoggedIn=false;
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  isUserLogedIn(){
    if(localStorage.getItem('token')!=null){
      return true;
    }
    return false;
  }
}
