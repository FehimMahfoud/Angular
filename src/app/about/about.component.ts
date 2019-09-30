import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map } from 'rxjs/operators'
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pageContacts :any;
  
  constructor(public http:HttpClient, public contactService:ContactService) { }

  ngOnInit() {
   this.contactService.getContacts().subscribe(data=>{
      this.pageContacts=data     
   })  
  }

}
