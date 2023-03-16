import { Component } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent {
  interpolation="This is string interpolation" ;//This will be renderd in html page

  book:any ={
    title:"Revolution 2020",
    author:"Chetan Bhagat",
    id:123
  }

}
