import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() state!: string;
  @Input() color: string = 'white';
  @Input() size: string = 'small';
  @Input() condition: string = '';
}
