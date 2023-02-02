import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() selectedItem: any = 'Все';
  mock: any = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  constructor() { }

  ngOnInit(): void {
  }

  public selectItem(item: any) {
    if(item === this.selectedItem) {
      return;
    }
    this.selectedItem = item;
  }
}
