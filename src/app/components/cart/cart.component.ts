import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IPizza} from "../../interfaces/pizza";
import {PizzaService} from "../../pizza.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items$: Observable<IPizza[]>;
  productCount: number = 0;
  productSum: number = 0;

  constructor(
    private pizza: PizzaService
  ) {
    this.items$ = this.pizza.getPizzas();
  }

  ngOnInit(): void {
  }

}
