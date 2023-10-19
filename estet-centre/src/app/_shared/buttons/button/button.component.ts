import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() minWidth: string = '100px';
  @Input() line: boolean = true;
  @Input() state: 'green' = 'green';
  @Input() size: 'big' = 'big';
  @Output() btnClick = new EventEmitter<void>();
}
