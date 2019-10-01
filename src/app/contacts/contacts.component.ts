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
 currentPage:number=0
 size:number=5
 
  constructor(public contact:ContactService) { }

  ngOnInit() {
  }

  getPageContact(i:number){
     this.currentPage=i
     console.log(this.currentPage)
     this.chercher()
  }

  chercher(){
    console.log("Chercher "+this.currentPage)
    this.contact.getContact(this.motCle, this.currentPage, this.size).subscribe(data=>{
      this.pageContacts=data
      this.pages = new Array(data.totalPages)      
   
    },error=>{
     console.log(error);
   })
  }

}
