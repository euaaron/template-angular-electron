import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ActionButtonComponent } from './action-button/action-button.component';
import { TitleComponent } from './title.component';

@NgModule({
  declarations: [
    TitleComponent,
    ActionButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TitleComponent,
    ActionButtonComponent
  ]
})
export class TitleModule { }
