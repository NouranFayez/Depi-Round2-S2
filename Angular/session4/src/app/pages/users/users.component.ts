import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users : any = []

  handleUserEvent(eve : any){
    this.users.push(eve)
    console.log(this.users)
  }

}
