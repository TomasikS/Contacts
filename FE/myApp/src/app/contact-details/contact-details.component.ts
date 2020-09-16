
import { Contact } from '../contact';
import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id: number;
contact: Contact;

  constructor(private route: ActivatedRoute,private router: Router,
    private contactService: ContactService) { }

  ngOnInit() {
    this.contact = new Contact();

    this.id = this.route.snapshot.params['id'];
    
    this.contactService.getContact(this.id)
      .subscribe(data => {
        console.log(data)
        this.contact = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['contacts']);
  }
}