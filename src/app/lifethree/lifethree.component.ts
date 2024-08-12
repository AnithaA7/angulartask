import { Component ,OnInit,OnChanges,DoCheck, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifethree',
  templateUrl: './lifethree.component.html',
  styleUrls: ['./lifethree.component.css']
})
export class LifethreeComponent implements OnInit, OnChanges, DoCheck{

parentData:{count:number}={count:0}
diff=undefined;
constructor(){

}
ngOnInit(): void {
  console.log("ngOnInit works");
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("simplechanges" , changes);
  }

  ngDoCheck(): void {
    
  }

changeData(){
  this.parentData.count=this.parentData.count+1;
}



}