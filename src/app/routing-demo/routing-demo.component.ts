import { Component } from '@angular/core';
import { AuthService } from '../auth/guards/auth/authservice/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-demo',
  templateUrl: './routing-demo.component.html',
  styleUrls: ['./routing-demo.component.css']
})
export class RoutingDemoComponent {
  constructor(private authservice:AuthService,private route:Router){}
  toggleColor:boolean=true;
  status:string="Logged In!!";
  OnLogout(){
    this.status="Logged Out!!";
    this.toggleColor=!this.toggleColor;
    this.route.navigate(['/StudentsDetails'])
    return this.authservice.OnLoggout();
  }
  OnLogin(){
    this.status="Logged In!!";
    this.toggleColor=!this.toggleColor;
    return this.authservice.OnLogin();
  }
}
