import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Contact {
  firstname: string = '';
  lastname: string = '';
  gender: string = '';
  isToc: boolean = false; 
  email: string = '';
}

@Component({
  selector: 'app-validationform',
  templateUrl: './validationform.component.html',
  styleUrls: ['./validationform.component.css']
})

export class ValidationformComponent {
  title = 'Template driven forms';
  contact: Contact = new Contact(); 

  @ViewChild('contactForm', { static: false }) contactForm!: NgForm;

  constructor() {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contact);
    } else {
      console.error('Form is invalid');
    }
  }
}
