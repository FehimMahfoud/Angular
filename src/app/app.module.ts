import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router"
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { ContactService } from 'src/services/contact.service';
import {FormsModule} from "@angular/forms";
import { NewContactComponent } from './new-contact/new-contact.component'

const appRoute:Routes= [
  { 
    path:"about"
   ,component:AboutComponent
  },
  {
    path:"contacts",
    component:ContactsComponent
  },
  {
    path:"newContact",
    component:NewContactComponent
  },
  {
    path:'',
    redirectTo : "/about",
    pathMatch : 'full'
  }

]


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
