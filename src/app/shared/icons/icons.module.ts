import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  ChevronDown,
  ChevronUp,
  Github,
  Minus,
  X
} from 'angular-feather/icons';

const icons = {
  Github,
  ChevronUp,
  ChevronDown,
  Minus,
  X,
};

@NgModule({
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
