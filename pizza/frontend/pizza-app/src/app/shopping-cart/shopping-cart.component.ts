import { PizzaService } from './../services/pizza.service';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { CartItem } from './cart-item';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  //Add products to cart
  //increase the quantity
  //delete product from cart
  //checkout --> Update the address(optional) & place the order
  cartService: ShoppingCartService;
  cart: any=[];
  orders: any = [];
  productForm !: FormGroup;
  private orderSub: Subscription;
  @Input() qnt: number[] = [];
  pizzaService: PizzaService;
  constructor(private formBuilder:FormBuilder, private service:ShoppingCartService , private pService: PizzaService) { 
    this.pizzaService = pService;
    this.cartService = service;
  }
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      quant: ['', Validators.required],
    });
    this.cart = this.service.getCart();
  }
  removeFromList(i: number): void {
    this.cart.splice(i, 1);
    this.qnt.splice(i, 1);
  }

  getTotal() {
    var total: number = 0;
    for(let i = 0; i < this.cart.length; i++) {
      total += <number>this.cart[i].total_price * this.qnt[i];
    };
    return total;
  }
  checkout(product, qnt: number[]) {
    let cart_order = {};
    product.forEach((x, index) => {
      if (this.isValid(qnt[index])) {
        let product_id = x.id;
        let order_date = new Date();
        if (!product_id){
            console.log("Error")
        } else{
          cart_order = {
            customer_id: 1,
            product_id: product_id,
            quantity: qnt[index],
            order_date: order_date
          }
          //console.log(cart_order)
          this.service.submitOrders(<CartItem>cart_order)
          .subscribe(responce => {
            console.log(responce);
            this.cart.splice(index);
            this.qnt.splice(index);
            }, (error) => {
              console.log(error);
            });
        }
      } else {
        alert(x.name + " is invalid")
      }
      
    });
  }
  isValid(values: number) {
    if (values > 10 || values <= 0 || isNaN(values)){
      return false;
    } else {
      return true;
    }
  }
}
