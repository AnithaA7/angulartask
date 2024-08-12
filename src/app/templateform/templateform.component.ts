import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {

  // countryList = [
  //   {"countryname" : "India"},
  //   {"countryname" : "USA"},
  //   {"countryname" : "England"}

  // ];

  // onSubmit(myForm : NgForm){
  //   console.log(myForm);
  // }

  // countryList = 
  //  ["India","USA","England"];

  // onSubmit(myForm : NgForm){
  //   console.log(myForm);
  // }
  // formData = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   country: ''
  // };

  countryList = 
    {  name: 'India' ,
      name1: 'USA' ,
     name2: 'England' };

  // onSubmit(myForm : NgForm) {
  //   console.log(myForm);
   
  // }

  // experience = [1,2,3,4,5,6,7,8,9,10]

  
  //  onSubmit(myForm:NgForm) {
    
  //   console.log("Submitted",myForm);
  // }



    // countryList: Country[] = [
    //   new Country('1', 'India'),
    //   new Country('2', 'USA'),
    //   new Country('3', 'England')
    // ];
  
  //   onSubmit(contactForm: NgForm) {
  //     console.log(contactForm.value);
  //   }
  // }
  
  // export class Country {
  //   id: string;
  //   name: string;
  
  //   // constructor(id: string, name: string) {
  //   //   this.id = id;
  //   //   this.name = name;
  //   // }
  // }
  

}

