// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   private data: any[] = [];

//   constructor() { }

//   addToData(item: any): void {
//     this.data.push(item);
//   }

//   getData(): any[] {
//     return this.data;
//   }
// }

import {Product} from './product'
 
export class ProductService{
 
    public  getProducts() {
 
        let products:Product[] = [];
 
        products=[
            new Product(1,'Memory Card',500),
            new Product(2,'Pen Drive',750),
            new Product(3,'Power Bank',100)
        ]
 
        return products;               
    }
}
 