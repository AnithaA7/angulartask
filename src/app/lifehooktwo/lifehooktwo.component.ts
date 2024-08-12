import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-lifehooktwo',
  templateUrl: './lifehooktwo.component.html',
  styleUrls: ['./lifehooktwo.component.css']
})
export class LifehooktwoComponent implements OnInit {
  
  Name:string="Roshan";


  constructor(){

  }

  ngOnInit(): void {
    console.log("Roshan");
  }
 
  newname(){
    console.log("Roshhhhhh");
  }

}
