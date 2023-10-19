import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frame-image',
  templateUrl: './frame-image.component.html',
  styleUrls: ['./frame-image.component.scss']
})
export class FrameImageComponent {
  @Input() img: string = '';
  @Input() state: 'left' | 'right' = 'left';
  @Input() height: string = '100px';
  @Input() width: string = '100px';
}
