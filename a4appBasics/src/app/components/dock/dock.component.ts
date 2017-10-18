import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css']
})
export class DockComponent implements OnInit {
  personList:Person[];
  total:number;
  button1:boolean;
  button2:boolean;
  constructor( private _router: Router ) {
    this.total=0;this.button1=true;this.button2=true;}

  ngOnInit() {
    console.log("ngOnInitCalled");
    this.myFunction();
    this.personList=[{firstName:'Anoop',lastName:'Chaudhary',age:24},{firstName:'Atul',lastName:'Sachan',age:23},{firstName:'Ajay',lastName:'Mohan',age:23}];
  }

  onClickAdd(){
    let sum =0
    this.personList.forEach(element => {
      sum=sum+element.age;
    });
    this.personList;
    this.total=sum;
    return false;
  }
  
  myFunction() {
    //this._router.navigate(['']);
    var myWindow = window.open("/", "", "width=200,height=100");
}

onClickMinimize(){
  this.button1=!this.button1;
}
onClickMinimize2(){
  this.button2=!this.button2;
}

}

interface Person{
  
  firstName:string;
  lastName:string;
  age:number;
}
