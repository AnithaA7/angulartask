import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  
  title = 'myfirstrf';
 
  

  countryList = [
    {"countryname" : "India"},
    {"countryname" : "USA"},
    {"countryname" : "England"}
  ];

  ngOnInit(): void {
    console.log(this.userForm.value)
  }

    userForm = new FormGroup({
      'firstname': new FormControl('null', [Validators.required]),
      'lastname': new FormControl('null', [Validators.required]),
      'email': new FormControl('null', [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'isMarried': new FormControl(false),
      'country': new FormControl('null'),
      'city': new FormControl(null),
      'street': new FormControl(null),
      'pincode': new FormControl(null),
    });
}