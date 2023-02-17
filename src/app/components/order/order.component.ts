import {Component, Input, OnInit} from '@angular/core';
import {IPizza} from "../../interfaces/pizza";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() card!: IPizza;
  countProduct: number = 1;
  optionProduct: string = 'какую пэтсу желаете';
  disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public decrease(): number {
    if (this.countProduct < 0) {
      this.disabled = true;
    };
    return this.countProduct = this.countProduct - 1;
  }

  public increase(): number {
    return this.countProduct = this.countProduct + 1;
  }

  public deleteProduct(cardId: number): void {
    console.log('удаление элемента с id: ',cardId)
  }
}
