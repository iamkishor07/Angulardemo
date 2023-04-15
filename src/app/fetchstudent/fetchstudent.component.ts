import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
 students: any=[];   
 isopen:boolean= false;
ngOnInit(){
  this.FetchForm = this.fb.group({ //This is using FormBuilder 
    id:['1302'] 
  });
}
onfetch(){
  this.http.getstudent(this.FetchForm.value.id).
  subscribe(data => this.students = data);
      this.isopen=true;
      console.log("Form data",this.students);
      this.router.navigate(['/getstudent',this.students.id,]);
    };
}
