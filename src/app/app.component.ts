import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Menu} from "./menu.model";
import {Tab} from "./tab.model";
import {MenuService} from "./menu.service";
import {MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ViewChild('tabGroup', {static: false}) tab: MatTabGroup;

  maxNumberOfTab = 3;
  tabs: Tab[] = [];
  menus: Menu[] = [];

  constructor(private menuService: MenuService) {
    this.menus = menuService.fetchMenu();
  }

  ngOnInit(): void {
  }

  onAdd(value: Menu): void {
    console.log(value);
    if(this.tabs.find(u => u.name === value.name)){
      return;
    }
    const tab: Tab = {
      name: value.name,
      header: value.header
    }
    this.tabs.push(tab);
  }

}
