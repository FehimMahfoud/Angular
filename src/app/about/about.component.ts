import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pageContacts :any;
  
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/chercherContacts?mc=FE').pipe(map(resp=>resp)).subscribe(data=>{
      this.pageContacts = data;
    },error =>{
      console.log("Erreur");
    });  
  }

}
