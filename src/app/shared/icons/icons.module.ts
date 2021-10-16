import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  ChevronDown,
  ChevronUp, Link2, Minus, X
} from 'angular-feather/icons';

const icons = {
  ChevronUp,
  ChevronDown,
  Minus,
  Link2,
  X,
};

@NgModule({
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
