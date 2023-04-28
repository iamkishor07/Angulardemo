import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("outgoing Request");
    console.log(request.url);
    //we can manipulate the Http response here
    //Here we can modify the response from the server to the client 
    return next.handle(request).pipe(tap((event)=>{
      console.log(event);
      if(event.type === HttpEventType.Response){
        console.log("Event Response data");
        console.log(event.body);
      }

    }));
  }
}
