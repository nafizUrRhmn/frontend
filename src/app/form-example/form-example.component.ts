import {Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {

  @ViewChild(MatTabGroup, {read: MatTabGroup})
  public tabGroup!: MatTabGroup;
  @ViewChildren(MatTab, {read: MatTab})
  public tabNodes!: QueryList<MatTab>;
  public closedTabs: number[] = [];

  constructor() {
    console.log('hello');
  }
  public tabs = [{
    tabType: 0,
    name: 'Main'
  }, {
    tabType: 1,
    name: 'Dashboard'
  },{
    tabType: 2,
    name: 'Tests'
  }];

  closeTab(event: any, index: number) {
    event.stopPropagation();
    this.closedTabs.push(index);
    this.tabGroup.selectedIndex = this.tabNodes.length - 1;
  }
}
