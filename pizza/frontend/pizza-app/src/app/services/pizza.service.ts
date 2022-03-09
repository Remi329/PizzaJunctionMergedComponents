import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { catchError,map } from 'rxjs/operators';

import { Pizza } from "../pizzas/pizza.model";
import { DataService } from "./data.service";

@Injectable({ providedIn: "root" })
export class PizzaService /*extends DataService*/ {
  http: HttpClient;
  url: string = "http://localhost:3000/api/v1/pizzas/pizza";
  urlID: string = "http://localhost:3000/api/v1/pizzas/pizza";
  private pizzas: Pizza[] = [];
  private pizzasUpdated = new Subject<Pizza/*[]*/>();

  constructor(http: HttpClient) {
    //super('http://localhost:3000/api/v1/pizzas/pizza',http);
    this.http = http;
  }

  /*getPizzas() {
    //let x: Observable<Pizza[]>;
    this.http
      .get<{ message: string; pizzas: Pizza[] }>(
        this.url
      )
      .subscribe(postData => {
        this.pizzas = postData.pizzas;
        this.pizzasUpdated.next([...this.pizzas]);
      });
    return this.http.get(this.url).pipe(map(response => response));
  }*/
  public getPizzas() {
    let observable: Observable<Pizza[]>;
    observable = this.http.get<Pizza[]>(this.url);
    return observable;
  }
  
  public getPizzasById(id: string) {
    console.log(id);
    let observable: Observable<Pizza[]>;
    observable = this.http.get<Pizza[]>(this.url+"/"+id);
    return observable;
  }

  getPizzaUpdateListener() {
    this.pizzas.forEach((pizza: Pizza) => {
      this.pizzasUpdated.next(pizza);
    })
    return this.pizzasUpdated.asObservable();
  }
}
