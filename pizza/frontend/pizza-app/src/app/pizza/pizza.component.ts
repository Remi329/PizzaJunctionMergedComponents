import { PostService } from './../services/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit,OnDestroy {
  pizzas!: Object;
  pizzaArray: any = [];
  
  pizzaService: PostService;
   
  //ngxpagination
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;//dictates the amount of data in a table at a time
  tableSizes: any = [3, 6, 9, 12];


  
  //new
  subscription: Subscription;
//new from tutorial
  //new from tutorial
  //new from tutorial
  //new from tutorial
  products: any;
  results: any=[];
  filteredPizzas: any[] = [];
filterTerm!: string;//new
 pizzasearchArray: any = [];
productname:any;
  //used for backend-priyanka tutorial
  /*constructor(private http:HttpClient) {
  const  url = 'https://jsonplaceholder.typicode.com/posts';
    
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response =>{
      console.log(response);
      this.pizzas = response;
    })*/
    constructor(private service: PostService) {
      // let products: Pizza[] = [];
    this.pizzaService = service;
    //new
   this.subscription =  this.pizzaService.getPizzas()
            .subscribe(products => this.filteredPizzas = this.products = products);

  
  }

  


  onDataChange(event: any) {
    this.page = event;
    this.ngOnInit();
  }
  onSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }


 
  

  @Input() productCount = 0;
  @Output() getProductsEvent = new EventEmitter();
  
   
     
 ngOnInit() {    
  //this.getPizzas();
 this.service.getPizzas().subscribe((response) => {
        this.pizzaArray = response;

      });

  }

  

//new
filterSearchedPizzas(query: string){
  console.log("Products: ",this.products);
  console.log(query); 
   console.log(typeof this.products);//its an object-cant use filter for an object
  console.log("Pizzaarray",this.pizzaArray);
  console.log("filtered array= ",this.pizzaArray.status);
  //output
  this.filteredPizzas = (query)?
  this.pizzaArray.status.filter((p: { product_name: string; })  => p.product_name.toLowerCase().includes(query.toLowerCase())) :
  this.pizzaArray.status;
  console.log("type of results array= ", typeof this.pizzaArray.status);
console.log("results array= ",this.pizzaArray.status);//status[0]get a specfic index here outputs an actual array

  
 console.log('Object=',this.products)  //all records in the db are shown
console.log('Array=',this.results.status) //undefined
//return this.filteredPizzas.find('product_name',(ref: { where: (arg0: string, arg1: string, arg2: string) => any; }) =>ref.where('product_name','==',query)).snapshotChanges();
}

//new
//makes sure if there are mulitple wondows>>destroyed
ngOnDestroy() {
    this.subscription.unsubscribe();
}
  /*getPizzas(): void{
    //  this.service.getPizzas();
     this.service.getPizzas().subscribe((response: any) => {
        this.pizzaArray = response();
      });
    // this.pizzaSub = this.pizzaService.getPizzaUpdateListener()
    //   .subscribe((response: any) => {
    //     this.pizzas = response.json();
    //   });
  }*/
  getAllProducts(){
   this.ngOnInit();
  }
    
  }