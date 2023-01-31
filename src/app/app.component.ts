import { Component } from '@angular/core';
import {DOUGH, SIZES, SwitchButton} from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pizza';
  dough: SwitchButton[] = DOUGH;
  sizes: SwitchButton[] = SIZES;
}
