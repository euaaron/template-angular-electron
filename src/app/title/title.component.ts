import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  public toggleMaximize = {
    Title: "Maximize",
    Icon: "chevron-up"
  }

  public test() {
    console.log('Passing Functions Works!!');
  }

  runToggleMaximize() {
    if (this.toggleMaximize.Title == "Maximize") {
      this.toggleMaximize.Title = "Restore";
      this.toggleMaximize.Icon = "chevron-down";
    } else {
      this.toggleMaximize.Title = "Maximize";
      this.toggleMaximize.Icon = "chevron-up";
    }
  }
}
