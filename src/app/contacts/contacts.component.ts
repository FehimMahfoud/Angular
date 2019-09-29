import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact = {
    "nom" : "Persone",
    "email" : "email@gmail.com"
  }
  constructor() { }

  ngOnInit() {
  }

}
