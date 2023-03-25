import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public students:any=[]
  constructor(private studentservice:StudentService){
    
  }
  ngOnInit() {
   this.studentservice.getAllStudents()
   .subscribe(data=> this.students = data);
  }

}
