import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DirectiveComponent,
    StudentComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
