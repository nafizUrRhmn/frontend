import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import { IdentityFormComponent } from './identity-form/identity-form.component';
import { LocationFormComponent } from './location-form/location-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentityFormComponent,
    LocationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
  exports:[AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
