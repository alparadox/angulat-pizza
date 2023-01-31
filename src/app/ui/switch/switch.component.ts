import {Component, Input, OnInit} from '@angular/core';
import {DOUGH, SIZES, SwitchButton} from "../../data";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() dough: SwitchButton[] = DOUGH;
  @Input() sizes: SwitchButton[] = SIZES;
  @Input() items: SwitchButton[] = [];
  @Input() selectedItem: any = null;

  constructor() { }

  ngOnInit(): void {
    this.selectedItem = this.items[0];
  }

  public selectItem(item: SwitchButton): void {
    if(item.id === this.selectedItem.id) {
      return;
    }
    this.selectedItem = item;
  }
}
