import { Component, OnInit } from '@angular/core';  
import { Contact } from '../contact';  
import { ContactService } from '../contact.service';  
  
  
@Component({  
  selector: 'app-show-data',  
  templateUrl: './show-data.component.html', 
  styleUrls: ['./search-customers.component.css']  
})  
export class ShowDataComponent implements OnInit {  
  
 
  firstname: string;
  contacts: Contact[];
 
  constructor(private contactService: ContactService) { }
 
  ngOnInit() {
    this.firstname=" ";
    
  }

  private searchContacts() {
    this.contactService.getContactsByFirstname(this.firstname)
      .subscribe(contacts => this.contacts = contacts);
  }
 
  onSubmit() {
    this.searchContacts();
  }
 }