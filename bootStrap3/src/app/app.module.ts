import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';

import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
