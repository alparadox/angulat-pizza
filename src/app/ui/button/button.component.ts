import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() textOnButton: string = 'Вернуться назад';
  @Input() countGood: number = 0;
  @Input() type: 'primary' | 'secondary' | 'outline' | 'ghost' | 'circle' | 'circle-delete'| 'add' | 'add-count' = 'primary';
  iconSrc: string = '';
  arrowIsShow: boolean = false;
  basketIsShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showIcon();
    this.changeIconBack()
  }

  public changeIcon(): void {
    if (this.type === 'outline') {
      this.iconSrc = 'assets/img/grey-arrow-left-hover.svg'
    } else if (this.type === 'ghost') {
      this.iconSrc = 'assets/img/trash-hover.svg'
    }
  }

  public changeIconBack(): void {
    if (this.type === 'outline') {
      this.iconSrc = 'assets/img/grey-arrow-left.svg'
    } else if (this.type === 'ghost') {
      this.iconSrc = 'assets/img/trash.svg'
    }
  }

  private showIcon(): void {
    if (this.type === 'outline') {
      this.arrowIsShow = true;
    } else if (this.type === 'ghost') {
      this.basketIsShow = true;
    }
  }
}
