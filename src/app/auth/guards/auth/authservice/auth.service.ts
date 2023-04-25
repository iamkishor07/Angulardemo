import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  islogged:boolean=true;
  OnLogin(){
    this.islogged=true;
  }
  OnLoggout(){
    this.islogged=false;
  }
  isAuthentication(){
    return this.islogged;
  }
}
