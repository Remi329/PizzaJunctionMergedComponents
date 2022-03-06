import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputText: string = ''
  title = 'my-pizza-app';
  pizzas: any = [
    {
      id: 1,
      name: "meat",
      toppings: []
    },
    {
      id: 2,
      name: "vegitarian",
      toppings: []
    },
    {
      id: 3,
      name: "hawian",
      toppings: []
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
