import { Component, Input, OnInit,SimpleChanges,ContentChild,ElementRef,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-childapple', 
  templateUrl: './childapple.component.html',
  styleUrls: ['./childapple.component.css']
})
export class ChildappleComponent implements OnInit ,AfterContentInit{
  @Input() parentData!: number;

  @Input() receivemessage!:string;


  constructor() {}

  ngOnInit(): void {

    console.log("init");
  }
  ngOnChanges(values:SimpleChanges){
    console.log("simplechanges" , values);
  }
  @ContentChild("contentwrapper") content! : ElementRef;

  contentData:any='';
  contents:any='';
  
  ngAfterContentInit(): void {
    if (this.content) {
      console.log("ngcontent", this.content);
      this.content.nativeElement.style.color = "deeppink"; 
      this.contents = this.content.nativeElement.innerHTML;
    } 
  }
  

}
