import { Component , OnInit } from '@angular/core';
import { MathsService } from '../maths.service';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit{

  constructor(public _maths : MathsService){

  }
  ngOnInit(): void {
    
  }

}
