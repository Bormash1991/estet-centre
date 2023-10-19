import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../buttons/button/button.component';
import { IconButtonComponent } from '../buttons/icon-button/icon-button.component';
import { SimpleModule } from './simple.module';


@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
  ],
  imports: [
    CommonModule,
    SimpleModule
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent
  ]
})
export class ButtonsModule {
}
