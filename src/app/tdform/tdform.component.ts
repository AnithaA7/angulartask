import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent {

  submitted = false;

  onSubmit(loginForm: any) {
    this.submitted = true;
    if (loginForm.valid) {
      console.log('Form submitted with:', loginForm.value);

    }
  }

}