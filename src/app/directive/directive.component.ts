import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles: [`.online{
    color:white;
  }
    `]
})
export class DirectiveComponent {

  message:string="You Not Added in the list";
  inputmessage:string="";
  isclick:boolean=false;
  addstats="";
  addid:number=10;
  constructor(){
    this.addstats=Math.random()>0.5?"offline":"online";
  }
  onAddedme(){
    this.isclick=true;
    this.addstats="online";
    this.message=this.inputmessage+" Added successfully to the list";

  }
  getaddstats(){
    return this.addstats;
  }
  getcolor(){
    return this.addstats=='online'? 'green':'red';
  }

}
