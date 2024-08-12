

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'http://localhost:9000/alldata';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl);
  }

  postData(formData: any): Observable<any> {
  
    return this.http.post<any>(this.baseUrl, formData);
  }
  
  // putData(id: number, formData: any): Observable<any> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.put<any>(url, formData);
  // }

  putData(id: number, formData: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, formData);
  }
  

  deleteData(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}




