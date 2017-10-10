import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css']
})
export class DockComponent implements OnInit {
  personList:Person[];
  total:number;
  constructor() { this.total=0;}

  ngOnInit() {
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
    var myWindow = window.open("/", "", "width=200,height=100");
}

}

interface Person{
  
  firstName:string;
  lastName:string;
  age:number;
}
