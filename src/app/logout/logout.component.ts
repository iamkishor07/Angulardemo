import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService:AuthenticationService,
    private router:Router
    ){}
  ngOnInit(): void {

    if(this.authenticationService.isUserLogedIn()){
      alert("Are you sure Logout!!");
      // this.status="Logged Out!!";
      // this.toggleColor=!this.toggleColor;
       this.authenticationService.logout();
    }else{
      alert('Please Log In');
    }
    this.router.navigate(['/Login'])

     
  }

}
