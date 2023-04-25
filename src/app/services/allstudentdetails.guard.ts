import { Injectable } from '@angular/core';
import {  Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { student } from '../shared/students.mode';
import { StudentService } from '../student.service';

@Injectable({
  providedIn: 'root'
})
export class AllstudentdetailsGuard implements Resolve<student> {

  constructor(private http:StudentService){}
resolve(): student | Observable<student> | Promise<student> {
    return this.http.getAllStudents();
}}
  

