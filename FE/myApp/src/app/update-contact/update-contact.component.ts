import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ActivatedRoute, Router } from '@angular/router';
import {ContactService } from '../contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  id: number;
  contact:Contact;
  submitted = false;



  constructor(private route: ActivatedRoute,private router: Router,
    private contactService: ContactService) { }

  ngOnInit() {
    this.contact= new Contact();

    this.id = this.route.snapshot.params['id'];
    
    this.contactService.getContact(this.id)
      .subscribe(data => {
        console.log(data)
        this.contact = data;
      }, error => console.log(error));
  }

  updateContact() {
    this.contactService.updateContact(this.id, this.contact)
      .subscribe(data => {
        console.log(data);
        this.contact = new Contact();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateContact();    
  }

  gotoList() {
    this.router.navigate(['/contacts']);
  }
}