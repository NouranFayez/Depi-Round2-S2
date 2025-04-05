import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public global: GlobalService){}


  handleLogout(){
    localStorage.removeItem('token')
    this.global.isLogin = false
  }

}
