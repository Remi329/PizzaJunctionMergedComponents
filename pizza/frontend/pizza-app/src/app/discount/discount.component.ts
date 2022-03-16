import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api2.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  displayedColumns: string[] = ['discount_category', 'start_date', 'start_time', 'end_date','end_time','discount_percent','product_id','status'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  activeroute: ActivatedRoute;

  router: Router;

  discountForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private api:ApiService, activeroute: ActivatedRoute,router: Router){
    this.activeroute = activeroute;

    this.router = router;
  }

  ngOnInit(): void {

    this.discountForm=this.formBuilder.group({
      discount_category :['', Validators.required],
      start_date : ['', Validators.required],
      start_time : ['', Validators.required],
     //date : ['', Validators.required],
      end_date: ['', Validators.required],
      end_time : ['', Validators.required],
      discount_percent :  ['', Validators.required],
      product_id:['', Validators.required],
      status :  ['', Validators.required]
    })
  
  }
    addDiscount(){
    if(this.discountForm.valid){
      console.log(this.discountForm.value);
      this.api.postDiscount(this.discountForm.value)
      .subscribe(res=> {
          alert("Discount Added Succesfully");
          this.discountForm.reset();
        },
        (error)=>{
          alert("error while adding the Discount")

        })
      }
  }
  
//new
  applyDiscount(){    
    if(this.discountForm.valid){
      console.log(this.discountForm.value);
      this.api.postApplyDiscount(this.discountForm.value)
      .subscribe(res=> {
          alert("Discount Added to Product Succesfully");
          this.discountForm.reset();
        },
        (error)=>{
          alert("error while adding the Discount")

        })
      }
  }
  getAllDiscount(){
    this.api.getDiscount()
    .subscribe(res=>{
       this.dataSource=new MatTableDataSource(res);
       this.dataSource.paginator=this.paginator;
       this.dataSource.sort=this.sort
      },
      (error)=>{
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






