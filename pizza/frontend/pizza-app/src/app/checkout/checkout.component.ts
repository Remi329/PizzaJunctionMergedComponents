import { map } from 'rxjs/operators';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order: any = [];
  total: number = 0
  private orderSub: Subscription;

  orderService: ShoppingCartService;
  constructor(private service: ShoppingCartService) { 
    this.orderService = service;
  }

  ngOnInit(): void {
    this.service.getItemById("1").subscribe((responce)=>{
      this.order = responce;
    });
    this.orderSub = this.orderService.getItemUpdateListener()
      .subscribe((responce: any) => {
        this.order = responce;
      });
    this.service.getTotal("1").subscribe((responce: number)=>{
      this.total = responce
      console.log(this.total)
    });
  }
}
