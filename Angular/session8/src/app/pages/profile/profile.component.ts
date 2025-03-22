import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private global:GlobalService){}

  ngOnInit(){
    this.global.getProfile().subscribe(res=>{
      console.log(res)
    })
  }

}
