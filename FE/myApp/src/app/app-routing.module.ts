import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ShowDataComponent } from './contact-search/show-data.component';



const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'add', component: CreateContactComponent },
  { path: 'update/:id', component: UpdateContactComponent },
  { path: 'details/:id', component: ContactDetailsComponent },
  { path: 'findbyage', component: ShowDataComponent },
  { path: 'firstname/',  component: ContactListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }