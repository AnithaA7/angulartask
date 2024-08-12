import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifehookthree',
  templateUrl: './lifehookthree.component.html',
  styleUrls: ['./lifehookthree.component.css']
})
export class LifehookthreeComponent implements DoCheck { 
  message: string = "Send message";
  object: any = { Name: 'Anitha', Age: 22 };
  Name: string = '';
  Age: any = '';

  ngDoCheck() {    
    console.log("Check the Message");

    let keys: string[] = Object.keys(this.object);

    if (keys.length > 0) {
      this.Name = keys[0];
      this.Age = this.object[this.Name]; 
      
      console.log("call ngDoCheck ");
    }
  }

  changeMessage() {
    this.message = "New message";
  }

  showTextbox: boolean = false;
  inputText: string = '';

  ngOnInit(): void {
   console.log("Textbox")
  }

  toggleTextbox(): void {
    this.showTextbox = !this.showTextbox;
  }

}


