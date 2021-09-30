import { Injectable } from '@angular/core';
import { TabModel } from '../model/TabModel';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private tabList: TabModel[] = [];

  constructor() { }

  public count() {
    return this.tabList.length;
  }
}
