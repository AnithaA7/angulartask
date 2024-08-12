import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  formD: any = { name: '', email: '' };
  alldetails: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.http.get('http://localhost:3000/user').subscribe(
      (res: any) => {
        console.log(res);
        this.alldetails = res;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }

  postdata() {
    this.http.post('http://localhost:3000/user', this.formD).subscribe(
      (res: any) => {
        console.log(res);
        this.formD = { name: '', email: '' }; // Clear the form
        this.getdata(); // Fetch all data again to ensure consistency
      },
      error => {
        console.error('Error posting data', error);
      }
    );
  }

  onSubmit() {
    this.postdata();
  }
}



// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
  
// @Component({
//   selector: 'app-getdata',
//   templateUrl: './getdata.component.html',
//   styleUrls: ['./getdata.component.css']
// })
// export class GetdataComponent implements OnInit {
//   formD: any = { name: '', email: '' };
//   alldetails: any[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.getdata();
//   }
  
//   getdata() {
//     this.http.get<any[]>('http://localhost:9000/alldatass').subscribe(
//       res => {
//         console.log(res);
//         this.alldetails = res;
//       },
//       error => {
//         console.error('Error fetching data', error);
//       }
//     );
//   }

//   postdata() {
//     this.http.post('http://localhost:9000/alldatass', this.formD).subscribe(
//       res => { 
//         console.log(res);
//         this.alldetails.push({ ...this.formD }); 
//         this.formD = { name: '', email: '' }; 
//         this.getdata(); 
//       },
//       error => {
//         console.error('Error posting data', error);
//       }
//     );
//   }

//   onSubmit() {
//     this.postdata();
  
//   }
// }
