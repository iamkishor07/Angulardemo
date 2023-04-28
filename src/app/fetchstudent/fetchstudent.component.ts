import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { student } from '../shared/students.mode';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetchstudent',
  templateUrl: './fetchstudent.component.html',
  styleUrls: ['./fetchstudent.component.css']
})
export class FetchstudentComponent  implements OnInit{
constructor(private http:StudentService,private fb:FormBuilder,private router:Router){}
 FetchForm!: FormGroup;
 error=null;
 isFetching=false;
//  FormGroup = new FormGroup({
//   id: new FormControl(),
//   name:new FormControl(),
//   age:new FormControl(),
//   gender:new FormControl(),
//   college:new FormControl(),
// })
students: any=[];   
isopen:boolean= false;
ngOnInit(){
  this.FetchForm = this.fb.group({ //This is using FormBuilder 
    id:['1156'] 
  });
  
}
onfetch(){
  this.isFetching=true;
  this.error=null;
  this.http.getstudent(this.FetchForm.value.id).
  subscribe(
    (data:student) =>{
      this.students=data;
      this.isopen=true;
      this.isFetching=false;
    },
    (error) =>{
      this.error=error.message;
    }
  );
    // console.log("Form data",this.students);
      // this.router.navigate(['/getstudent',this.students.id,]);
    };
}
