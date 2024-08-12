// import { Component, OnInit } from '@angular/core';
// import { PersonService } from '../person.service';

// @Component({
//   selector: 'app-person',
//   templateUrl: './person.component.html',
//   styleUrls: ['./person.component.css']
// })
// export class PersonComponent implements OnInit {
//   formData: any = { name: '', email: '', message: '', id: '' };
//   allData: any[] = [];

//   constructor(private personService: PersonService) {}

//   ngOnInit() {
//     this.getData();
//   }

//   onSubmit() {
//     if (this.formData.name && this.formData.email && this.formData.message) {
     
//       if (this.formData.id) {
//         this.putData(this.formData.id, this.formData);
//       } else {
//         console.log('Calling postData with:', this.formData);
//         this.postData();
//       }
//     }
//   }

//   getData() {
//     this.personService.getData().subscribe(
//       (person: any[]) => {
//         console.log('Get Successful:', person);
//         this.allData = person;
//         alert('Data retrieved successfully');
//       },
//       (error: any) => {
//         console.error('Error retrieving data:', error);
//       }
//     );   
//   }

//   postData() {
//     this.personService.postData(this.formData).subscribe(
//       (response: any) => {
//         console.log('Post successful!', response);
//         this.formData = { name: '', email: '', message: '', id: '' };
//         this.getData();
//         alert('Data submitted successfully');
//       },
//       (error: any) => {
//         console.error('Error posting data:', error);
//       }
//     );
//   }

//   putData(id: number, formData: any) {
//     this.personService.putData(id, formData).subscribe(
//       (response: any) => {
//         console.log('Put successful!', response);
//         this.formData = { name: '', email: '', message: '', id: '' };
//         this.getData();
//       },
//       (error: any) => {
//         console.error('Error updating data:', error);
//       }
//     );
//   }

//   deleteData(id: any) {
//     this.personService.deleteData(id).subscribe(
//       (response: any) => {
//         console.log('Delete successful!', response);
//         this.getData();
//       },
//       (error: any) => {
//         console.error('Error deleting data:', error);
//       }
//     );
//   }

//   editData(person: any) {
//     this.formData.id = person._id;
//     this.formData.name = person.name;
//     this.formData.email = person.email;
//     this.formData.message = person.message;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  formData: any = { name: '', email: '', message: '', id: '' };
  allData: any[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.getData();
  }

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      if (this.formData.id) {
        this.putData(this.formData.id, this.formData);
      } else {
        this.postData();
      }
    }
  }

  getData() {
    this.personService.getData().subscribe(
      (person: any[]) => {
        console.log('Get Successful:', person);
        this.allData = person;
        alert('Data retrieved successfully');
      },
      (error: any) => {
        console.error('Error retrieving data:', error);
      }
    );   
  }

  postData() {
    this.personService.postData(this.formData).subscribe(
      (response: any) => {
        console.log('Post successful!', response);
        this.formData = { name: '', email: '', message: '', id: '' };
        this.getData();
        alert('Data submitted successfully');
      },
      (error: any) => {
        console.error('Error posting data:', error);
      }
    );
  }

  putData(id: number, formData: any) {
    this.personService.putData(id, formData).subscribe(
      (response: any) => {
        console.log('Put successful!', response);
        this.formData = { name: '', email: '', message: '', id: '' };
        this.getData();
      },
      (error: any) => {
        console.error('Error updating data:', error);
      }
    );
  }

  deleteData(id: any) {
    this.personService.deleteData(id).subscribe(
      (response: any) => {
        console.log('Delete successful!', response);
        this.getData(); // Refresh the data after deleting
      },
      (error: any) => {
        console.error('Error deleting data:', error);
      }
    );
  }

  editData(person: any) {
    this.formData.id = person._id;
    this.formData.name = person.name;
    this.formData.email = person.email;
    this.formData.message = person.message;
  }
}

