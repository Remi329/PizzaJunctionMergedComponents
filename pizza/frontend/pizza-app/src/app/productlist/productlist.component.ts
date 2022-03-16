import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../pizzas/pizza.model';
import { PostService } from '../services/post.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
    pizzaService: PostService;  
    cartService: ShoppingCartService;
    products: any;
    pizzaArray: any = [];
    pizzaPriceArray : any = [];
  constructor(private service: PostService, private cService: ShoppingCartService) {
      // let products: Pizza[] = [];
    this.pizzaService = service;
    //new
    this.cartService = cService;
  }
  //new code
  @Input() productCount = 0;
  @Output() getProductsEvent = new EventEmitter();
  
  ngOnInit() {
    this.service.getPizzas().subscribe((response) => {
        this.pizzaArray = response;
      });

      this.service.getDiscountedPizzaPrice().subscribe((response) => {
        this.pizzaPriceArray = response;
      });
  }

  addToCart(product: Pizza) {
    //console.log(product, qnt)
    this.cartService.addItem(product);
  }
  
}
