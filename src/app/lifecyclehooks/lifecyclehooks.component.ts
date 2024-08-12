import { Component, OnChanges, SimpleChanges, OnInit, DoCheck,ContentChild,ElementRef, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  message: string = "Hello, Angular!";
constructor(){

}
ngOnChanges(changes: SimpleChanges) {
  console.log("ngOnChanges", changes['message'].currentValue, changes['message'].previousValue);
}

newMessage(){
  this.message = "New message";
}

  ngOnInit() {
    console.log("ngOnInit ");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit ");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked ");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
