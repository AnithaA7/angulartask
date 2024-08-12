import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
  parentData: number = 0;
  
  sendmessage:string='';

  constructor() { }

  ngOnInit(): void {
  }

  changeData() {
    this.parentData = this.parentData + 1;
  }
}
