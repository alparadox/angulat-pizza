import { Component, OnInit } from '@angular/core';
import {Sort, SORTING} from "../../sort";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  sort: Sort[] = SORTING;

  constructor() { }

  ngOnInit(): void {
  }

}
