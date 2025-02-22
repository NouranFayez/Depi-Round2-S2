import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users = [
    {name : "Zein Tamer" , address : "Maadi"},
    {name : "Marwa Mohamed" , address : "October"},
    {name : "Ahmed Fayez" , address : "Nasr city"},
    {name : "Tamer Fayez" , address : "Nasr city"},
  ]

}
