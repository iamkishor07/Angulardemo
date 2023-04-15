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
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FetchstudentComponent } from './fetchstudent/fetchstudent.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AllstudentdetailsGuard } from './services/allstudentdetails.guard';
import { StudentService } from './student.service';
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
  providers: [AllstudentdetailsGuard,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
