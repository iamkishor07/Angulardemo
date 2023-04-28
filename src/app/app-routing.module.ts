import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { FetchstudentComponent } from './fetchstudent/fetchstudent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { StudentComponent } from './student/student.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AllstudentdetailsGuard } from './services/allstudentdetails.guard';
import { AdminauthGuardGuard } from './auth/guards/adminauth-guard.guard';

const routes: Routes = [
  {path:'',redirectTo:'/StudentsDetails',pathMatch:'full'},
  {path: 'addstudent', title: 'Add Student',component:AddStudentComponent ,canActivate:[AdminauthGuardGuard]},
  {path:'getstudent' , title: 'Get Student',component:FetchstudentComponent},
  // {path:'StudentsDetails', title: 'Student Details',component: StudentComponent ,resolve:{data:AllstudentdetailsGuard}},
  {path:'StudentsDetails', title: 'Student Details',component: StudentComponent },

  {path:'Deletestudent', title: 'Delete Student',component: UpdatestudentComponent},
  {path:'Updatestudent', title: 'Update Student',component: UpdatestudentComponent},
  {path:'getstudent/:id' , title: 'Get Student Id',component:FetchstudentComponent},
  {path:'Updatestudent/:id', title: 'Update Student',component: UpdatestudentComponent},
  {path:'page-not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[StudentComponent,PageNotFoundComponent,FetchstudentComponent,AddStudentComponent,UpdatestudentComponent]
