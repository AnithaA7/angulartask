import { Component } from "@angular/core";
@Component({
    selector:'app-batch9',
    templateUrl:'./batch9.component.html',
    styleUrls:['./batch9.component.css']
})
export class Anitha{ 
    firstnumber: number = 6;
    secondnumber: number = 5;

  Vegitables = [
    {"VegName":"Tomato", "Rate":100,"color":"Red"},
    {"VegName":"Potato", "Rate":200,"color":"Sandal"},
    {"VegName":"Cabbage", "Rate":300 , "color":"Green"}
  ];

  a: number = 5;
b: number = 5;
result: number = 0;

c(): number {
  return this.a + this.b;
}

d: number = 7;
e: number = 9;
results: number = 0;

f(): number {
  return this.d + this.e;
}

isActive: boolean = false;

  title:string="pipe examples";
  toDate: Date= new Date();
num:number=44.8899;
per:number=49;
cur:number=5000;
fDate:Date = new Date();

chocolates = ["KitKat","Dairy Milk","Slick","Milky Bar","Five star"];


masala=["Cumin","Coriander","Turmeric","Sambar Masala","Chicken Masala",
"Chicken 65 Masala","Biryani Masala","Mutton Masala","Chat Masala","Chilli",
"Cardamom","Tamarind","Tandoori Masala","Chana Masala","Saffron",
"Rasam Masala","Mustard seeds","Fenugreek","Chettinad Masala","Fennel",
"Lemon","Asafoetida","Pepper","Cloves","Fish Masala."];

// length : number = 5;
// width : number = 8;

area : number = 100;

// fnumber:number=6;
// snumber:number=9;



Students = [
  {"student1":"Anitha","mark":100,"gen":"female"},
{"student1": "Maha","mark":90,"gen":"female"},
{"student1":"Malar","mark":80,"gen":"female"}
];






}