import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {
  addId:number=10;
  addstatus:string="";
  constructor(){
    this.addstatus=Math.random()>0.5?"Your name":"Your surname";
  }
  getaddstatus(){
    return this.addstatus;
  }
}
