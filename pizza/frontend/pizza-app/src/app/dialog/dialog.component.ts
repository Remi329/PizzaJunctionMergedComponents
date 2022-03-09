import { PizzaService } from './../services/pizza.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api1.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Pizza } from './pizza.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  hide = true;

  displayedColumns: string[] = ['name','total_price','image_url','topping_id'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  productForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private api:ApiService, private service:PizzaService){}

  ngOnInit(): void {

    this.productForm=this.formBuilder.group({
    name : ['', Validators.required],
    //productCategory : ['', Validators.required],
   //date : ['', Validators.required],
    total_price: ['', Validators.required],
    image_url : ['', Validators.required],
    topping_id :['', Validators.required]
    })
  }
  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(<Pizza>this.productForm.value)
      .subscribe(res=> {
        console.log(res);
          alert("Product Added Succesfully");
          this.productForm.reset();
        },
        (error)=>{
          console.log(error);
          alert("error while adding the product")
        })
      }
  }
  getAllProduct(){
    this.service.getPizzas()
    .subscribe(res=>{                                         
        console.log(res);
       this.dataSource=new MatTableDataSource(res);
       this.dataSource.paginator=this.paginator;
       this.dataSource.sort=this.sort
      },
      (err)=>{
        alert("Error while fetching the record");
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
 