import { ContactDetailsComponent } from './../contact-details/contact-details.component';
import { Observable } from "rxjs";
import { ContactService } from "./../contact.service";
import { Contact } from "./../contact";
import { Component, OnInit, ViewChild  } from "@angular/core";
import { Router } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';    
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'; 
 
 
@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})

export class ContactListComponent implements OnInit {
displayedColumns: string[] = ['firstname' ];
dataSource = new MatTableDataSource ( );
contacts: Contact;
  
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private contactService: ContactService,
    private router: Router) {
      this.contacts = this.getAllContacts();
    }
    
    ngOnInit(): void {

      this.dataSource.paginator = this.paginator;
    }

    deleteContact(id: number) {
      this.contactService.deleteContact(id)
        .subscribe(
          data => {
            console.log(data);
            this.contacts = this.getAllContacts( 
              );
              
           
          },
          error => console.log(error));
    }

  contactDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateContact(id: number){
    this.router.navigate(['update', id]);
  }

  getAllContacts():any {
    this.contactService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
}