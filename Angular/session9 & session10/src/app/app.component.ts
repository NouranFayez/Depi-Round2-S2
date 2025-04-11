import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'session8';

  constructor(public global : GlobalService){}

  ngOnInit(){
    // this.global.getProfile().
    let token = localStorage.getItem('token')
    if(token) this.global.isLogin = true 
    else this.global.isLogin = false
    console.log('app component')
  }
}
