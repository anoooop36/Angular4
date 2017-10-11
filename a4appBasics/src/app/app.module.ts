import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { DockComponent } from './components/dock/dock.component';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';  



const appRoutes: Routes = [
  {  path:'',component:DockComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DockComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
