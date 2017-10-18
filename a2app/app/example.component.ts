import {Component, OnInit} from '@angular/core';
import {bootstrap}      from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent, []);

@Component({
    selector: 'example-component'
    templateUrl: 'app/example.component.html'
})
export class ExampleComponent implements OnInit{
    public message: string;
    constructor() {
    }

    private ngOnInit(){
        this.message='Hello World';
    }
}