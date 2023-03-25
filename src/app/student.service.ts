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
}
