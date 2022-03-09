import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../dialog/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postProduct(data:Pizza){
    //return this.http.post<any>("http://localhost:3000/productList/",data);
    let observable: Observable<any>;
    console.log(data);
    observable = this.http.post("http://localhost:3000/api/v1/auth/pizza",data) ;
    console.log(observable);
    return observable;
  }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/api/v1/auth/pizza");
  }
}
