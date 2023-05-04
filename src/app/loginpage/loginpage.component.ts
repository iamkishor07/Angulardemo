import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  loginForm=new FormGroup({
    username:new FormControl('username',Validators.required),
    password:new FormControl('password',[Validators.required,Validators.minLength(7)])
  })
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router
  ){ }
    issingup=false
  Login(){
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    this.authenticationService.login(username,password).subscribe(
      ()=>this.router.navigateByUrl("/StudentsDetails"),
      (Error)=>{
        // alert("An error occured");
        this.router.navigateByUrl("/Login")
      }
    )
  }

}
