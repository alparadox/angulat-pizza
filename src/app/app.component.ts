import { Component } from '@angular/core';
import {Sort, SORTING} from "./sort";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pizza';
  sort: Sort[] = SORTING;
}
