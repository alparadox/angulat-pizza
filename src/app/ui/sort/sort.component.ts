import {Component, Input, OnInit} from '@angular/core';
import {Sort, SORTING} from "../../sort";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Input() items: Sort[] = [];
  @Input() selectedItem: any = null;
  showSort: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.selectedItem = this.items[0];
  }

  public selectItem(item: Sort): void {
    if(item.id === this.selectedItem.id) {
      return;
    }
    this.selectedItem = item;

    this.showSort = !this.showSort
  }

}
