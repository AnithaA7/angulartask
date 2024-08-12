import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

name = "AnithaAlagar";

add():number{
  return 10 + 5;
}
sub():number{
  return 10 - 5;
}
mul():number{
  return 10 * 5;
}
div():number{
  return 10 / 5;
}

displayname:string="";

NAME($event:string){
  this.displayname = $event;
}

receivemessage : string ="";

messageresult(message : any){
  this.receivemessage = message;
}

@ViewChild(ChildComponent)child:any;

ngAfterViewInit(): void {
  this.msg = this.child.childmessage;
}



dname(aa:any){
  this.msg=this.child.childmessage;

}

msg : string ="";




Counter = 5;


countChangedHandler(count:number){
  this.Counter = count;
  console.log(count);
}
items = ['item1', 'item2', 'item3', 'item4'];

addItem(newItem: string) {
  this.items.push(newItem);
}
}
