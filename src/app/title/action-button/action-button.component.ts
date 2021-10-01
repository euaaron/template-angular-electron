import { Component, Input } from '@angular/core';
import { ActionService } from './services/action.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() public icon? = '';
  @Input() public title: string;

  constructor(private action: ActionService) { }

  onClick() {
    this.action.run(this.title.toLowerCase());
  }

}
