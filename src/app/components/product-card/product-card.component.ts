import {Component, Input, OnInit} from '@angular/core';
import {DOUGH, SIZES, SwitchButton} from "../../data";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() titleProduct = 'АХАХА ПЭТСА'
  @Input() priceProduct: number = 0;
  @Input() srcImg: string = 'assets/img/nophoto.jpg';
  dough: SwitchButton[] = DOUGH;
  sizes: SwitchButton[] = SIZES;
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
