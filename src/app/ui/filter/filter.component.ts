import {Component, Input, OnInit} from '@angular/core';
import {PizzaService} from "../../pizza.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() selectedItem: any = 'Все';
  mock: any = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  constructor(
    private pizzaService: PizzaService
  ) { }

  ngOnInit(): void {
    this.pizzaService.filter = 'ololol';
  }

  public selectItem(item: any) {
    if(item === this.selectedItem) {
      return;
    }
    this.selectedItem = item;
    this.filterProduct(item);
  }

  private filterProduct(item: any): void {
    console.log(item, 'filter')
  }
}
