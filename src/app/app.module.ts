import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FetchstudentComponent } from './fetchstudent/fetchstudent.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AllstudentdetailsGuard } from './services/allstudentdetails.guard';
import { StudentService } from './student.service';
import { ServicesInterceptor } from './ExampleInterceptor/services.interceptor';
import { LoggingInterceptor } from './ExampleInterceptor/logging.interceptor';


//The order of the Interceptor is Important in Here that's how the execution Happens 
const HttpInterceptor = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ServicesInterceptor, //Here the first should be the service Interceptor so that handles the request to server from the client
    multi: true,                   //In here the request can modified and can make any changes before that gonna hit the server performs all request related stuff
  },
  { provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor, //After the service interceptor executes the logging Interceptor transfers the response back to the client from the server
    multi: true,                  //In here the repose can modified and perform all reponse related stuff
  },
]
@NgModule({
  declarations: [
    AppComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DirectiveComponent,
    routingcomponent,
    RoutingDemoComponent,
    PageNotFoundComponent,
    FetchstudentComponent,
    AddStudentComponent,
    UpdatestudentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AllstudentdetailsGuard,
    StudentService,
    HttpInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
