import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
 motCle:string=""
 pageContacts:any
 pages:Array<number>
 page:number=0
 size:number=5
 
  constructor(public contact:ContactService) { }

  ngOnInit() {
  }

  chercher(){
    this.contact.getContact(this.motCle, this.page, this.size).subscribe(data=>{
   
      this.pageContacts=data
      this.pages = new Array(data.totalPages)      
   
    },error=>{
     console.log(error);
   })
  }

}
