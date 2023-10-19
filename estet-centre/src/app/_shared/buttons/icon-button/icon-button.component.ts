import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() iconColor!: string;
  @Input() icon!: string;
  @Input() size: 'small' = 'small';
  @Input() state: 'light' = 'light';
}
