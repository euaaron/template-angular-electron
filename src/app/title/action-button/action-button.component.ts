import { Component, Input, OnInit } from '@angular/core';
import { ActionService } from './services/action.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  public classes = 'action-button';
  @Input() public icon? = '';
  @Input() public title: string;

  constructor(private action: ActionService) { }

  ngOnInit(): void {
    if(this.title === "Close") {
      this.classes += ' red-hover';
    }
  }

  onClick() {
    this.action.run(this.title.toLowerCase());
  }

}
