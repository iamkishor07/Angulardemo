import { NgModule } from '@angular/core';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { FetchstudentComponent } from './fetchstudent/fetchstudent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { StudentComponent } from './student/student.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AllstudentdetailsGuard } from './services/allstudentdetails.guard';
import { AdminauthGuardGuard } from './auth/guards/adminauth-guard.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',redirectTo:'/Login',pathMatch:'full'},
  {path:'Login' , title: 'login',component:LoginpageComponent},
  {path:'logout' , title: 'Logout',component:LogoutComponent},
  {path: 'addstudent', title: 'Add Student',component:AddStudentComponent,canActivate:[AdminauthGuardGuard] },
  {path:'getstudent' , title: 'Get Student',component:FetchstudentComponent,canActivate:[AdminauthGuardGuard]},
  // {path:'StudentsDetails', title: 'Student Details',component: StudentComponent ,resolve:{data:AllstudentdetailsGuard}},
  {path:'StudentsDetails', title: 'Student Details',component: StudentComponent,canActivate:[AdminauthGuardGuard] },
  {path:'Deletestudent', title: 'Delete Student',component: UpdatestudentComponent,canActivate:[AdminauthGuardGuard]},
  {path:'Updatestudent', title: 'Update Student',component: UpdatestudentComponent,canActivate:[AdminauthGuardGuard]},
  {path:'getstudent/:id' , title: 'Get Student Id',component:FetchstudentComponent,canActivate:[AdminauthGuardGuard]},
  {path:'Updatestudent/:id', title: 'Update Student',component: UpdatestudentComponent,canActivate:[AdminauthGuardGuard]},
  {path:'page-not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // enableTracing: true //to events can be viewed in the browser console by passing an enableTrace: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[StudentComponent,PageNotFoundComponent,FetchstudentComponent,AddStudentComponent,UpdatestudentComponent]
