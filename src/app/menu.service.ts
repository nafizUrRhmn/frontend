import {Injectable} from "@angular/core";
import {Menu} from "./menu.model";

@Injectable({providedIn: 'root'})
export class MenuService{

  public fetchMenu(): Menu[]{
    const menus:Menu[] = [{
      id: 1,
      name: 'Dashboard',
      iconClass: 'fs-4 bi-speedometer2',
      header: 'Dashboard Header',
      parentId: null,
      sequence: 1
    },
      {
        id: 2,
        name: 'Item 1',
        iconClass: null,
        header: 'Item 1 Header',
        parentId: 1,
        sequence: 2
      },
      {
        id: 3,
        name: 'Item 2',
        iconClass: null,
        header: 'Item 1 Header',
        parentId: 1,
        sequence: 3
      },
      {
        id: 4,
        name: 'Order',
        iconClass: 'fs-4 bi-table',
        header: 'Dashboard Header',
        parentId: null,
       sequence:4
      }]
    return menus;
  }
}
