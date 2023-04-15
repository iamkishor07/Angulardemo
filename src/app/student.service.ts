import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from './shared/students.mode';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API:string="http://localhost:8080/api/Student";
  constructor(public http:HttpClient) {

   }
   getAllStudents():Observable<student[]>{
    return this.http.get<student[]>(this.API+"/fetchAll");
   }
   getstudent( data:number):Observable<student>{
    return this.http.get<student>(this.API+"/getStudent/"+data);
   }
   addstudent(studentdata:any){
    return this.http.post(this.API+"/signup",studentdata);
   }

   delstudent(student:any){
    return this.http.delete(this.API+"/deleteStudent/"+student);
   }

   updatestudent(student:any){
    return this.http.put(this.API+"/updateStudent/"+student.id,student);
   }


   
}
