import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
  HttpResponse
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
    return next.handle(request).pipe(tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          if(event.status == 401) {
            alert('Unauthorized access!');
          }
        }
        return event;
      },
      error: (error) => {
        if(error.status === 401) {
          alert('Unauthorized access!');
        }
        else if(error.status === 404) {
          alert('Page Not Found!');
        }
      }
    }));
  }
}
