import { Component , OnInit,OnDestroy,OnChanges, SimpleChanges,DoCheck,AfterViewInit
  ,AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-childlifecyclehooks',
  templateUrl: './childlifecyclehooks.component.html',
  styleUrls: ['./childlifecyclehooks.component.css']
})
export class ChildlifecyclehooksComponent  implements OnInit, OnDestroy,OnChanges,DoCheck,
AfterViewInit,AfterViewChecked{

  Child="Angular";

  ngOnInit(): void {
    console.log("Child OnInit" );
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child OnChanges");
  }
  

  ngDoCheck(): void {
    console.log("Child ngDoCheck");
  }

  ngAfterViewInit(): void {
    console.log("Child ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Child ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Child ngOnDestroy");
  }
}

