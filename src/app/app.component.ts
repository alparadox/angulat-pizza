import { Component } from '@angular/core';
import {PizzaService} from "./pizza.service";
import {IPizza} from "./interfaces/pizza";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pizza';
  items$: Observable<IPizza[]>;

  constructor(
    private pizza: PizzaService
  ) {
    this.items$ = this.pizza.getPizzas();
  }

  ngOnInit() {
  }
}
