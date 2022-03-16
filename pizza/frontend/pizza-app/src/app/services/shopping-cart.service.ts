import { catchError } from 'rxjs/operators';
import { Cart_Item } from './../shopping-cart/cart-item.model';
import { CartItem } from './../shopping-cart/cart-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pizza } from '../pizzas/pizza.model';
//import { AngularFireDatabase } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  http: HttpClient;
  url: string = "http://localhost:3000/api/v1/orders/order"
  pizzaUrl: string = "http://localhost:3000/api/v1/pizzas/pizza"
  cart: any = [];
  private pizzas: Pizza[] = [];
  private orders: CartItem[] = [];
  private pizzasUpdated = new Subject<Pizza/*[]*/>();
  private ordersUpdated = new Subject<CartItem>();

  constructor(http: HttpClient) { 
    this.http = http;
  }
  addItem(items: Pizza) {
    //console.log(product)
    let order = <Pizza>items
    const duplicate = this.cart.find((i)=>{
      return i.id === order.product_id;
    })
    if (duplicate === undefined) {
      this.cart.push(order);
    }
    //console.log(this.cart);
    return this.cart;
  }
  getCart() {
    return this.cart;
  }
  public getItemById(id: string) {
    let observable: Observable<CartItem[]>;
    observable = this.http.get<CartItem[]>(this.url+"/"+id);
    return observable;
  }
  public getTotal(id: string) {
    let observable: Observable<number>;
    observable = this.http.get<number>(this.url+"/sum/"+id);
    return observable;
  }
  public submitOrders(cart_item:CartItem) {
    /*let http = new HttpHeaders({
      'content-type' : 'application/json'
    })*/
    //let body = JSON.stringify(cart_item)
    let observable: Observable<any>;
    observable = this.http.post(this.url,cart_item)
    return observable;
  }

  getItemUpdateListener() {
    this.orders.forEach((order: CartItem) => {
      this.ordersUpdated.next(order);
    })
    return this.ordersUpdated.asObservable();
  }
}
