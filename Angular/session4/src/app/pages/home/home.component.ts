import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentDate = new Date()
  title = 'ANGULAR SESSION 4'

  obj = {
    name : "Marwa",
    email:"Marwa@hotmail.com"
  }

}
