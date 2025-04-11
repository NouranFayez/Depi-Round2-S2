import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private global : GlobalService){
    this.global.isAvailable = false
  }

  ngOnDestroy(){
    this.global.isAvailable = true
  }

}
