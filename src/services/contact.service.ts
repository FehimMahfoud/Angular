import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ContactService{
  constructor(public http:HttpClient){

  }

  getContacts(){
    return this.http.get('http://localhost:8080/chercherContacts?mc=FE').pipe(map(res=>res));   
  }

}