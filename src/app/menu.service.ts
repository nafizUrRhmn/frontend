import {Injectable} from "@angular/core";
import {Menu} from "./menu.model";
import {LocationFormComponent} from "./location-form/location-form.component";
import {IdentityFormComponent} from "./identity-form/identity-form.component";

@Injectable({providedIn: 'root'})
export class MenuService{

  public fetchMenu(): Menu[]{
    const menus:Menu[] = [{
      id: 1,
      name: 'Dashboard',
      iconClass: 'fs-4 bi-speedometer2',
      header: 'Dashboard Header',
      parentId: null,
      sequence: 1,
      component: null,
      children: [{
        id: 2,
        name: 'Location Form',
        iconClass: null,
        header: 'Location Form Header',
        parentId: 1,
        children: null,
        sequence: 2,
        component: LocationFormComponent
      },
        {
          id: 3,
          name: 'Identity Form',
          iconClass: null,
          header: 'Identity Form(Header)',
          parentId: 1,
          children: null,
          sequence: 3,
          component: IdentityFormComponent
        }
      ]
    }];
    return menus;
  }
}
