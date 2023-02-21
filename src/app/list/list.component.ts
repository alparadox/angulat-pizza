import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IPizza} from "../interfaces/pizza";
import {PizzaService} from "../pizza.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items$: Observable<IPizza[]>;

  constructor(
    private pizza: PizzaService
  ) {
    this.items$ = this.pizza.getPizzas();
  }

  ngOnInit(): void {
  }

}
