import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  className = "text-danger"

  classFlag = true

  customPadding = "p-4"
  customBgColor = "bg-light"
  customBorder = 'border border-primary border-4'
  customStyle = "lightgray"

  arr = [ 1, 2, 3]

}
