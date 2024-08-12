import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formsb',
  templateUrl: './formsb.component.html',
  styleUrls: ['./formsb.component.css']
})
export class FormsbComponent implements OnInit {
//   myForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder) { 
// }

//   ngOnInit() {
//     this.myForm = this.formBuilder.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   onSubmit() {
//     if (this.myForm.valid) {
//       console.log('Form Submitted!', this.myForm.value);
//     } else {
//       console.error('Form Invalid!');
//     }
//   }

admissionForm!: FormGroup;

constructor(private fb: FormBuilder) { }

gender = ["Male","Female","Others"];

ngOnInit(): void {
  this.admissionForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dob: ['', Validators.required],
    city: ['', Validators.required],
    class: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
    gender: ['', Validators.required],
    nationality: ['', Validators.required],
    previousSchool: ['' , Validators.required],
   
  });
}

onSubmit() {
  if (this.admissionForm.valid) {
   
    console.log(this.admissionForm.value);
  } 
}
}
