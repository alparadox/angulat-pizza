import {Component, Input, OnInit} from '@angular/core';
import {DOUGH, SIZES} from "../../data";
import {SwitchButton} from "../../interfaces/switch-button";
import {IPizza} from "../../interfaces/pizza";
import {PizzaType} from "../../enums/pizza-type";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() card!: IPizza;
  dough: SwitchButton[] = [...DOUGH] ;
  availableDoughs: PizzaType[] = [PizzaType.Thin, PizzaType.Traditional];
  sizes: SwitchButton[] = JSON.parse(JSON.stringify(SIZES));
  countGood: number = 0;
  typeButton:  'primary' | 'secondary' | 'outline' | 'ghost' | 'circle' | 'circle-delete'| 'add' | 'add-count'  = 'add';

  constructor() { }

  ngOnInit(): void {
  }

  public onAddItem(): void {
    this.countGood = this.countGood + 1;
    this.typeButton = 'add-count'
  }
}
