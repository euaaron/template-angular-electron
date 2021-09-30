import { Component, OnInit } from '@angular/core';
import { TabService } from './tab/service/tab.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  public toggleMaximize = {
    Title: "Maximize",
    Icon: "chevron-up"
  }

  constructor(public tabs: TabService) { }

  public test() {
    console.log('Passing Functions Works!!');
  }

  ngOnInit(): void {

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
