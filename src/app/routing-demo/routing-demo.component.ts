import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-routing-demo',
  templateUrl: './routing-demo.component.html',
  styleUrls: ['./routing-demo.component.css']
})
export class RoutingDemoComponent implements OnInit{
  isUserLoggedIn!:boolean;
  constructor(public authenticationService:AuthenticationService,private route:ActivatedRoute){}
  ngOnInit(){
    this.isUserLoggedIn=this.authenticationService.isUserLogedIn();
  }
  
  // toggleColor:boolean=true;
  // status:string="Logged In!!";
  // OnLogin(){
  //   this.status="Logged In!!";
  //   this.toggleColor=!this.toggleColor;
  //   return this.authservice.OnLogin();
  // }
}
