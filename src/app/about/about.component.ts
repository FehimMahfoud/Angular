import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { from } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/chercheContacts?mc=FEHIM&size=5&page=0');
  }

}
