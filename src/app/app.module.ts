import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';

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
    path:'',
    redirectTo : "/about",
    pathMatch : 'full'
  }

]


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
