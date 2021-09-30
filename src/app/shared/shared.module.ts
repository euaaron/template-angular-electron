import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    IconsModule
  ]
})
export class SharedModule { }
