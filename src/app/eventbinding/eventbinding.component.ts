import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  message:string="You Not Added in the list"
  isdisabled:boolean=false;
  inputmessage:string="";
  onAddedme(){
    this.message=this.inputmessage+" Added successfully to the list";
    this.isdisabled=true;

  }
  onupdated(event :Event){
    //We use $ sign in the input tag to fetch the data from the html on the input event
    this.inputmessage=(<HTMLInputElement>event.target).value;
  }

}
