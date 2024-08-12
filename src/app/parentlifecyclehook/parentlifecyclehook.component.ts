import { Component, OnInit,OnDestroy,OnChanges, SimpleChanges,DoCheck, 
  AfterContentInit, ViewChild,AfterViewInit, AfterViewChecked} from '@angular/core';
import { ChildlifecyclehooksComponent } from '../childlifecyclehooks/childlifecyclehooks.component';

@Component({
  selector: 'app-parentlifecyclehook',
  templateUrl: './parentlifecyclehook.component.html',
  styleUrls: ['./parentlifecyclehook.component.css']
})
export class ParentlifecyclehookComponent implements OnInit, OnDestroy,OnChanges,DoCheck ,
AfterContentInit,AfterViewInit,AfterViewChecked{

name="Angular";
count=0;
@ViewChild(ChildlifecyclehooksComponent,{static:false}) viewChild!:ChildlifecyclehooksComponent;

ngOnInit(): void {
  console.log("Parent OnInit",this.viewChild);
}

ngOnChanges(changes: SimpleChanges): void {
  console.log("Parent OnChanges",this.viewChild);
}


ngDoCheck(): void {
  console.log("Parent NgDoCheck");
}
ngAfterContentInit(): void {
  console.log("Parent ngAfterViewInit");

}

ngAfterViewInit(): void {
  if(this.count < 5){
    ++this.count;
  }
  console.log("Parent ngAfterViewInit", this.viewChild);
  this.viewChild.Child = "New Value" + this.count;
}

ngAfterViewChecked(): void {
  console.log("Parent ngAfterViewChecked");
}

ngOnDestroy(): void {
  console.log("Parent ngOnDestroy");
}

}