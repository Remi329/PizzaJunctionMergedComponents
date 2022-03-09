import { Component, OnInit } from '@angular/core';
//import { mat-card } 

@Component({
  selector: 'app-ratingpage',
  templateUrl: './ratingpage.component.html',
  styleUrls: ['./ratingpage.component.css']
})
export class RatingpageComponent implements OnInit {

  constructor() { }
currentRate : number=3;
  ngOnInit(): void {
  }

}
