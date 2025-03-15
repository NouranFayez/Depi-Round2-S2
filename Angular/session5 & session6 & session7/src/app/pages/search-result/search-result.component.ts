import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  standalone: false,
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  constructor(private global : GlobalService , private router : Router){

  }
  products : any =[]

  ngOnInit(){
    console.log(history.state)
    console.log(history.state.keyword)
    if(history.state.keyword == undefined){
      this.router.navigateByUrl('/')
    }
    else{
      this.global.searchResult(history.state).subscribe(res=>{
        console.log(res)
        this.products = res.data
      })

    }
  }


}
