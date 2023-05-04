import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ServicesInterceptor implements HttpInterceptor {

  constructor(private authenticationService:AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log("sending request");
    //can alter any Httprequest 
    // There are multiple real-time senarios where angular interceptors can be really useful:
    //   1. Modify HTTP headers
    //   2. Modifying the request body
    //   3. Set authentication/authorization token
    //   4. Modify the HTTP response
    //   5. Error handling
    //   6. Change the Requested URL

    //1.Modify the headers
    const authtoken=this.authenticationService.getToken();
        const modifiedRequest=request.clone({
          //can append new headers
          // headers:request.headers.append('Auth',authtoken),
          setHeaders:{
            Authorization:"Bearer"+authtoken //Passing the user token as in the header request to make api calls
          },
          //we can change the url here
          url:"",
          //we can add the params
          params:request.params.append('search','modify')
        });
        return next.handle(modifiedRequest);
  }
}
