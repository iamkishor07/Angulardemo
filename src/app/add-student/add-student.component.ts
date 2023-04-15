import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{
  students:any;
  constructor(private fb: FormBuilder,private studser:StudentService,private router:Router) {
  }
  AddstudentForm!: FormGroup;
  isadded: boolean = false;
  // AddstudentForm=new FormGroup({
  //     name: new FormControl('vamshi'),
  //     age: new FormControl('34'),
  //     gender: new FormControl('male'),
  //     College: new FormControl('VJIT')
  // });
  ngOnInit() {
    this.AddstudentForm = this.fb.group({ //This is using FormBuilder 
    name: ["Ajay Bro",  [Validators.required,Validators.minLength(3)]],
    age: ['', Validators.required],
    gender: ['',Validators.required,],
    college: ['',Validators.required,]
  });
}
  
      loaddefaultvalues(){
        this.AddstudentForm.setValue({ //setvalue property must set all the fields in the form -group or else it throws an error
        name:'KISHOR KUMAR',
        age:'24',
        gender:'Male',
        college:'JNTHU'
    })
  //   this.AddstudentForm.patchValue({ //patchvalue property is used to set only few fields in the form -group
  //     name:'pavan kalyan',
  //     age:'24',
  //     gender:'male',
  //     college:'JNTHU'
  // })
     }
getallstudentsdetails(){
this.router.navigate(['/StudentsDetails']);
}
 get studentname() {
    return this.AddstudentForm.get('name');
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.AddstudentForm.controls;
}
  addstudent(){
    this.studser.addstudent(this.AddstudentForm.value).subscribe(
      Response=>console.log('success!',Response)
    );
    this.fetch();
    this.isadded=true;
    this.getallstudentsdetails();
  }
  // addedagain(){
  //   this.isadded=false;
  // }
  fetch(){
    this.studser.getAllStudents()
    .subscribe(data=> this.students = data);
  } 

}

