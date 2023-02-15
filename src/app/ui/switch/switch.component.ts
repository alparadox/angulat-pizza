import {Component, Input, OnInit} from '@angular/core';
import {DOUGH, SIZES} from "../../data";
import {SwitchButton} from "../../interfaces/switch-button";
import {PizzaSize} from "../../enums/pizza-size";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() items: SwitchButton[] = [];
  @Input() availableItems: number[] = [];
  @Input() selectedItem: any = null;

  constructor() { }

  ngOnInit(): void {
    this.checkEnabled();
    this.initialSelectItem();
  }

  public selectItem(item: SwitchButton): void {
    if (item.id === this.selectedItem.id) {
      return;
    }
    this.selectedItem = item;
  }

  private initialSelectItem (): void {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].enabled) {
        this.selectedItem = this.items[i];
        break;
      }
    };
  }

  private checkEnabled(): void {
    this.items.forEach((item) => {
      if (!this.availableItems.includes(item.id)) {
        item.enabled = false;
      }
    });
  }
}
