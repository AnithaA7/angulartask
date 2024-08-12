import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() name : string="";

 @Input() result:number= 0 ;
 @Input() result1:number= 0 ;
 @Input() result2:number= 0 ;
 @Input() result3:number= 0 ;
 @Input() operation: string = "";
 @Input() operation1: string = "";
 @Input() operation2: string = "";
 @Input() operation3: string = "";

 @Input() count:number=0;

 @Output() newItemEvent = new EventEmitter<string>();
 
@Output() countChanged = new EventEmitter<number>();


@Output() nametoparent= new EventEmitter<string>();


@Output() smessage = new EventEmitter<string>();

// @Output() childmessage= new EventEmitter<string>();

addNewItem(value: string) {
  this.newItemEvent.emit(value);
}

increment(){
  this.count++;
  this.countChanged.emit(this.count);
  
}
decrement(){
  this.count--;
  this.countChanged.emit(this.count);
  
}

sendName(){
  this.nametoparent.emit("Anitha");
}


sendmessage(){
  this.smessage.emit("Hello Batch-9..! Welcome to Angular");
}

childmessage = "ANITHA @viewchild";

showmessage(){
  this.childmessage;
}

}
