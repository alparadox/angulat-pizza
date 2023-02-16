import {Component, Input, OnInit} from '@angular/core';
import {IPizza} from "../../interfaces/pizza";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() card!: IPizza;
  countProduct: number = 0;
  optionProduct: string = 'какую пэтсу желаете';

  constructor() { }

  ngOnInit(): void {
  }

}
