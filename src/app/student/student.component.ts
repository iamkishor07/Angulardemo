import { Component, OnInit } from '@angular/core';
import { student } from '../shared/students.mode';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any=[];   
  studentToUpdate = {
    id:"",
    name:"",
    age:"",
    gender:"",
    college:""
  }
  constructor(private studentservice:StudentService,private router:Router,private activaterouter:ActivatedRoute){}
  // edit(studuent: any){
  //   this.studentToUpdate = studuent;
  // }
  edit( studuent:any){
    this.studentToUpdate = studuent;
    this.router.navigate(['/Updatestudent',studuent.id],{relativeTo:this.activaterouter});
  }
  // addedagain(){
  //   this.isadded
  // }

  ngOnInit() {
  this.fetch();
  }
  deleteStudent(student: any) {
    // throw alert("deleted the details "+student);   
    this.studentservice.delstudent(student).subscribe(
      (resp) => {
        this.fetch();
      },
    )
  
}
updateStudent(){
  this.studentservice.updatestudent(student).subscribe(
    (resp) => {
      this.students=resp;
      // console.log(resp);
      this.fetch();
    },
  )
}
fetch(){
   this.students= this.activaterouter.snapshot.data['data'];
}
}
