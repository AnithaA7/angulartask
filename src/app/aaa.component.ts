import { Component } from "@angular/core";

@Component({
    selector:'app-aaa',
    templateUrl:'./aaa.component.html',
    styleUrls:['./aaa.component.css']
})


export class words { 

    name: string = "anitha";
    age: number = 22;
    
    dd: boolean = true;
    
    message: string = "Hello";
  
    
    times: number = 0; 
    show() {
        this.times++;  
    };
    
    showName: boolean = false;
    showname(){
      this.name="anitha";
      this.showName = true;
    }
      
    val: string = "";
    handleInput1(element: any) {
        this.val = element.value;
    }
  
    numbers: number = 6;
  
  
    value = 'add'; 
    values = 'sub'; 
    valu = 'mul'; 
    vals = 'div'; 

    num1 = 10;
    num2 = 5; 
    result = 0;
    
    add() {
      this.result = this.num1 + this.num2;
      return this.result;
    }
    
    sub() {
      this.result = this.num1 - this.num2;
      return this.result;
    }
    
    mul() {
      this.result = this.num1 * this.num2;
      return this.result;
    }
    
    div() {
      this.result = this.num1 / this.num2;
      return this.result;
    }
  
      // student={
      //   name1:"anitha" ,class:"A",Dept:"EEE"
      // };
      
      chocolate = [{
        name:"Vennila", color:"white",
      },
      {
          names : "Strawbery", color1:"pink"
      }
      ]

      number1: number = 100;
      number2: number = 400;
      number3: number = 200;
  
  
      students = [{
        Name:"Anitha", Rollno:7, Gender:"Female"
      }
      ]

      players = [
        "Dhoni","Raina","Rutu","Jaddu","Dube","Rachin","Rahane","Cherry","Mustafiuer"
      ]
  
      // names=""
      // clearName() {
      //   this.names="";
      // }

  }
  