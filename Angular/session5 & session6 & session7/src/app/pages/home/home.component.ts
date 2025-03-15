import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // globalSer : GlobalService
  searchWord : any = null
  constructor(public global : GlobalService ,
     private router : Router){
    console.log(global.appName)
  }

  handleSearch(){
    console.log('enter ...')
    this.router.navigateByUrl('/search-result' ,
       {state:{keyword: this.searchWord}})
  }

}
