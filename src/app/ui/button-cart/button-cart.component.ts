import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-cart',
  templateUrl: './button-cart.component.html',
  styleUrls: ['./button-cart.component.scss']
})
export class ButtonCartComponent implements OnInit {
  @Input() countProduct: number = 0;
  @Input() sumProduct: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
