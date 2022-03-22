import { Component, OnInit } from '@angular/core';
// import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  username = '';
  password = '';
  // password = '';
  // user: User = {
  //   username : 'shubham',
  //   password : 'pass'
  // }

  // users = [
  //   {username: "username1", password:"password1"}
  // ]
  users: Array<{name:string, pass:string}>=[];
  usernames=[];
  passwords=[];

  constructor() { }

  ngOnInit(): void {
  }

}
