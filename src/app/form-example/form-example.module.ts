import { NgModule } from '@angular/core';
import {FormExampleComponent} from "./form-example.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: FormExampleComponent
  }
];

@NgModule({
  declarations: [
    FormExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatIconModule

  ],
  exports: []
})
export class FormExampleModule { }
