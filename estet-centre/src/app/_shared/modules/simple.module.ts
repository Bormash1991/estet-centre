import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../simple/icon/icon.component';
import { FrameImageComponent } from '../simple/frame-image/frame-image.component';


@NgModule({
  declarations: [
    IconComponent,
    FrameImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent,
    FrameImageComponent
  ]
})
export class SimpleModule {
}
