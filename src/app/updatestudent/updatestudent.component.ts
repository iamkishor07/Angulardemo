import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

import { StudentService } from '../student.service';
import { student } from '../shared/students.mode';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit{
  // UpdatetudentForm!: FormGroup; 
  private stuid!: number;
  public students!:any;
  UpdatetudentForm = new FormGroup({
  id: new FormControl(),
  name:new FormControl(),
  age:new FormControl(),
  gender:new FormControl(),
  college:new FormControl(),
})
  
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private http:StudentService,private router:Router){}
  ngOnInit() {
    if(this.route.snapshot.params['id']!=undefined)
     this.doexecute();
      }
      doexecute(){
        this.stuid=this.route.snapshot.params['id'];
        this.http.getstudent(this.stuid)
        .subscribe((data:any)=>{  
          console.log("Form data",data);
          this.UpdatetudentForm.patchValue({ //patchvalue property is used to set only few fields in the form -group
               id:data.id,
                name:data.name,
                age:data.age,
                gender:data.gender,
                 college:data.college
             })
          })
      }
      fetch(){
        this.http.getAllStudents()
        .subscribe(data=> this.students = data);
        
      }  
      
      updatestudent(){
        this.http.updatestudent(this.UpdatetudentForm.value).subscribe(
            data => console.log("Sucess",data)    
        );
        this.fetch();
        this.router.navigate(['StudentsDetails']) 
      }
  
}
