import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartService: ShoppingCartService;
  cart: any=[];

  constructor( private service:ShoppingCartService) { 
    this.cartService = service;
  }

  ngOnInit(): void {
    this.cart = this.service.getCart();
  }

}
