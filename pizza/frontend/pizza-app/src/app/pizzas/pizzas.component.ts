import { ShoppingCartService } from '../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

import { Pizza } from "./pizza.model";
import { PizzaService } from "../services/pizza.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  pizzas: any = [];
  cart: any = [];
  private pizzaSub: Subscription;

  pizzaService: PizzaService;
  cartService: ShoppingCartService;
  constructor(private service: PizzaService, private cService:ShoppingCartService) { 
    this.pizzaService = service;
    this.cartService = cService;
  }

  ngOnInit(): void {
    this.service.getPizzas().subscribe((responce)=>{
      this.pizzas = responce;
    });
    this.pizzaSub = this.pizzaService.getPizzaUpdateListener()
      .subscribe((responce: any) => {
        this.pizzas = responce;
      });
  }

  addToCart(product: Pizza) {
    //console.log(product, qnt)
    this.cService.addItem(product);
  }
}
