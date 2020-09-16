import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Contact } from "./contact";
import { environment } from '../environments/environment';
import {   HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/contacts';

  constructor(private http: HttpClient) { 
 
    }

  getContact(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createContact(contact: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, contact);
  }

  updateContact(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getContactsList() :any {
   return this.http
   .get<Contact>(this.baseUrl);

  }
 
  getContactsByFirstname(firstname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/firstname/${firstname}`);
  }

 getAll( ): Observable<any> {
   return this.http.get(`${this.baseUrl}`)

 }

}
 