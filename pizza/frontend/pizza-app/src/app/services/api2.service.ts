import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  postDiscount(data:any){
    let observable: Observable<any>;
    console.log(data);
    observable = this.http.post<any>("http://localhost:4000/api/v1/auth/pizzadiscount",data);
    console.log(observable);
    return observable;
  }
  getDiscount(){
    return this.http.get<any>("http://localhost:4000/api/v1/auth/pizzadiscount");
  }

  postApplyDiscount(data:any){
    let observable: Observable<any>;
    console.log(data);
    observable = this.http.post("http://localhost:4000/api/v1/auth/applyDiscount",data);
    console.log(observable);
    return observable;
  }

  public getAllDetails(){
    return this.http.get<any>("http://localhost:4000/api/v1/auth/pizzadiscount");
  }
}