import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

import { Pizza } from "../pizzas/pizza.model";

@Injectable({ providedIn: "root" })
export class PizzaService {
  private pizzas: Pizza[] = [];
  private pizzasUpdated = new Subject<Pizza[]>();

  constructor(private http: HttpClient) {}

  getPizzas() {
    let x: Observable<Pizza[]>;
    this.http
      .get<{ message: string; pizzas: Pizza[] }>(
        "localhost:3000/api/v1/pizzas/pizza"
      )
      .subscribe(postData => {
        this.pizzas = postData.pizzas;
        this.pizzasUpdated.next([...this.pizzas]);
      });
  }

  getPizzaUpdateListener() {
    return this.pizzasUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Pizza = { id: null, title: title, content: content };
    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.pizzas.push(post);
        this.pizzasUpdated.next([...this.pizzas]);
      });
  }
}
