import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { NgbdTypeaheadHttp } from './wiki-search-component/wiki-search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponentComponent,
    NgbdTypeaheadHttp
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
