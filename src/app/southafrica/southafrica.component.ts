import { Component, OnInit ,SimpleChanges,DoCheck} from '@angular/core';

@Component({
  selector: 'app-southafrica',
  templateUrl: './southafrica.component.html',
  styleUrls: ['./southafrica.component.css']
})
export class SouthafricaComponent implements OnInit,DoCheck {
 count: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log("aaa");
  }

  ngOnChanges(values:SimpleChanges) {
    console.log('Count changed:', values);
  }

  changenumber() {
    this.count = this.count + 1; 
  }
  
  data: { name: string, age: number } = { name: '', age: 0 };

  ngDoCheck() {
    this.data = { name: 'John', age: 20 }; 
    console.log("ngdocheck works");
  }

}
