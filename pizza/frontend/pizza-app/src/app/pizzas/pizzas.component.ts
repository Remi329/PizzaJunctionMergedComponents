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

  pizzas: Pizza[] = [];
  private pizzaSub: Subscription;

  pizzaService: PizzaService;
  constructor(service: PizzaService) { 
    this.pizzaService = service;
  }
  /*pizzas: any = [
    {
      id: 1,
      name: "meat",
      toppings: ["pepperoni","chicken"]
    },
    {
      id: 2,
      name: "vegitarian",
      toppings: ["sweetcorn"]
    },
    {
      id: 3,
      name: "hawian",
      toppings: ["pineapple", "ham"]
    }
  ]*/

  ngOnInit(): void {
    this.pizzaService.getPizzas();
    this.pizzaSub = this.pizzaService.getPizzaUpdateListener()
      .subscribe((pizzas: Pizza[]) => {
        this.pizzas = pizzas;
      });
  }

}
