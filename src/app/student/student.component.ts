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
  students: student[]=[];   
  isFetching=false;
  error=null;
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
  edit( student:any){
    this.studentToUpdate = student;
    this.router.navigate(['/Updatestudent',student.id],{relativeTo:this.activaterouter});
  }
  // addedagain(){
  //   this.isadded
  // }

  ngOnInit() {
    this.isFetching=true;
   this.studentservice.getAllStudents().subscribe(
    (data)=>{
      this.students=data;
      this.isFetching=false;
    },
    (error) =>{
      this.error=error.message;
      console.log("Error occured"+error.message);
    }
  )
  }
  deleteStudent(student: number) {
    // throw alert("deleted the details "+student);   
    this.studentservice.delstudent(student).subscribe(
      (resp) => {
        this.reload();
      },
   
    )
  
}
updateStudent(){
  this.studentservice.updatestudent(student).subscribe(
    (resp:student) => {
      // this.students=resp;
      // console.log(resp);
      this.reload();
    },
  )
}

reload(){
  this.studentservice.getAllStudents().subscribe(
    (data)=>{
      this.students=data;
    },
    (error) =>{
      this.error=error.message;
      console.log("Error occured"+error.message);
    }
  )
  // console.log("the length is"+this.students.length);
}
fetch(){
  this.isFetching=false;
  this.reload();
  this.isFetching=true;

//  this.students= this.activaterouter.snapshot.data['data'];
//  console.log("the length is"+this.students.length);
}
}
