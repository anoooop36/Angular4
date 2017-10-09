import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name :string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Posts[];
  isEdit:boolean;

  constructor(private dataService:DataService) {
    console.log("constructor ran..");
   }

  
  ngOnInit() {
    this.isEdit=false;
    this.name= 'John Doe';
    console.log("ngOnInit ran..");
    this.age =30;
    this.address={
      street:'whitefield bengaluru',
      city: 'Boston',
      state: 'Karnatka'
    }
    this.hobbies=['Write code','Watch movies','Listen to'];
    this.dataService.getPosts().subscribe((posts)=> {this.posts=posts;});
  }
  onClick(){
    //console.log("Hello Save");
    this.name='Anoop';
    this.hobbies.push('new Hobbie');
  }
  addHobby(hobby){
    //console.log("working d");
    this.hobbies.push(hobby);
    return false;
  }
  deleteHobby(hobby){
    for (var index = 0; index < this.hobbies.length; index++) {
      if (hobby===this.hobbies[index]) {
        this.hobbies.splice(index,1);
      }
      
    }
    return false;
  }

  toggleEdit(){
    this.isEdit=!this.isEdit;
  }
}
interface Address {
  street:string;
  city:string;
  state:string;
}

interface Posts{
  id:number,
  title:string,
  body:string,
  userId:number
}
