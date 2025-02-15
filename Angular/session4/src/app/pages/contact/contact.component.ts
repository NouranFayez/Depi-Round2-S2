import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  num = 10
  numArr = [1,2,3,4,5 , 10]

  constructor(){
    
  }

}
