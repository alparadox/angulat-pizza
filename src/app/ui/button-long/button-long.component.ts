import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-long',
  templateUrl: './button-long.component.html',
  styleUrls: ['./button-long.component.scss']
})
export class ButtonLongComponent implements OnInit {

  @Input() arrowIsShow: boolean = false;
  @Input() textOnButton: string = 'Вернуться назад';
  @Input() type: 'primary' | 'secondary' | 'outline' = 'primary';
  iconSrc: string = 'assets/img/grey-arrow-left.svg';

  constructor() { }

  ngOnInit(): void {
  }

  changeIcon(): void {
    this.iconSrc = 'assets/img/grey-arrow-left-hover.svg'
  }

  changeIconBack(): void {
    this.iconSrc = 'assets/img/grey-arrow-left.svg'
  }
}
