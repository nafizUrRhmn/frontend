import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Menu} from "./menu.model";
import {Tab} from "./tab.model";
import {MenuService} from "./menu.service";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {IdentityFormComponent} from "./identity-form/identity-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatTabGroup, {read: MatTabGroup})
   tabGroup!: MatTabGroup;
  @ViewChildren(MatTab, {read: MatTab})
   tabNodes!: QueryList<MatTab>;
   closedTabs: number[] = [];
   tabs: Tab[] = [];
  menus: Menu[] = [];

  constructor(private menuService: MenuService) {
    this.menus = menuService.fetchMenu();
  }

  closeTab(event: any, index: number) {
    event.stopPropagation();
    this.closedTabs.push(index);
    this.tabGroup.selectedIndex = this.tabNodes.length - 1;
    this.tabs.splice(index, 1);
  }

  ngOnInit(): void {
  }

  onAdd(value: Menu): void {
    if (this.tabs.find(u => u.name === value.name)) {
      return;
    }
    const tab: Tab = {
      id: value.id,
      name: value.name,
      header: value.header,
      component: value.component
    }
    this.tabs.push(tab);
  }

}
