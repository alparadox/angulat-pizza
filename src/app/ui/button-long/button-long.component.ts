import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-long',
  templateUrl: './button-long.component.html',
  styleUrls: ['./button-long.component.scss']
})
export class ButtonLongComponent implements OnInit {

  @Input() arrowIsShow: boolean = false;
  @Input() textOnButton: string = 'Вернуться назад';
  @Input() colorOrange: boolean = false;
  @Input() colorBlack: boolean = false;
  @Input() colorWhite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
